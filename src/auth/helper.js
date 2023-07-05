const url = `https://comman-server.onrender.com/auth`;

export const singupCall = async (user) => {
  return fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  })
    .then((response) => response.json())
    .catch((error) => error);
};

export const signinCall = async (user) => {
  return fetch(`${url}/signin`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((error) => error);
};

export const signOut = async (next) => {
  return fetch(`${url}/signout`)
    .then(() => {
      if (typeof window === "undefined") return;
      localStorage.removeItem("token");
      next();
    })
    .catch((error) => error);
};

export const Authenticate = (token, next) => {
  if (typeof window === "undefined") return;

  if(token) localStorage.setItem("token", JSON.stringify(token));
  
  if (next && typeof next === "function") {
    next();
  }
};

export const Authorization = () => {
  if (typeof window === "undefined") return;

  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  }
};
