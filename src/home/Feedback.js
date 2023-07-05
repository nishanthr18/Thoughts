const url = `https://comman-server.onrender.com/todo`;
const Feedback = () => {

  const handleSubmit = () => {
      return fetch(url,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify({
              title:"Feedback",
              description:"Feedback description",
          }),
          credentials: "include"
      }).then(response => response.json()).then(result => console.log(result))
  }


  return (
    <div>
      <h1>THOUGHT OF THE DAY!</h1>
      <input type="text" placeholder="enter something" />
      <input type="text" placeholder="enter something" />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Feedback;
