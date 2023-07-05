import React, { useRef, useState, useEffect } from "react";
import { signinCall, Authenticate, Authorization } from "./helper";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";
import pic10 from "../assets/pic10.jpg";
import insta from "../assets/insta_logo.jpg";
import fb from "../assets/fb_logo.png";

const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

const Signin = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % pictures.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const singinCall = async () => {
    setLoading(true);
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };
    return await signinCall(user).then((response) => {
      if (response["token"]) {
        Authenticate(response["token"], () => {
          if (Authorization()) {
            document.location.reload();
            navigate("/home/feedbacks");
            setLoading(false);
          }
        });
      }
    });
  };

  return (
    <div className="signin_container">
      <div className="signin_header_container">
        <p className="header_text">
          <span className="my_mysuru" style={{ color: "#20c8b98c" }}>
            MY-MYSURU{" "}
          </span>
          one page, many stories!
        </p>
      </div>

      <div className="signin_body_container">
        <div className="bg_container">
          <img className="bg_img" src={pictures[index]} alt="bg" />
        </div>

        <div className="signin_form">
          <div className="header">
            <span>Welcome, please Sign-in.</span>
          </div>

          <div className="form_content">
            <input ref={nameRef} type="text" placeholder="username" />
            <input ref={passwordRef} type="password" placeholder="password" />
            <button onClick={singinCall}>
              {!loading ? "sign-in" : "Authenticating..."}
            </button>
          </div>

          <div className="footer">
            <p>
              New user? please{" "}
              <span onClick={() => navigate("/auth/signup")}>sign-up</span>{" "}
              here.
            </p>
          </div>
        </div>
      </div>

      <div className="signin_footer_container">
        <div className="footer_header">
          <span>
            Your thoughts do really matters. We read all your thoughts, Thank
            you in advance.
          </span>
        </div>
        <div className="footer_body">
          <>
            <span style={{ color: "#fff" }}>
              contact: mymysuru2015@gmail.com
            </span>
          </>
          <>
            <a href="https://instagram.com/my_mysuru" target="_blank" rel="noreferrer">
              <img src={insta} alt="insta" />
            </a>
            <a href="https://m.facebook.com/mymysuru"  target="_blank" rel="noreferrer">
              <img src={fb} alt="fb" />
            </a>
          </>
        </div>
      </div>
    </div>
  );
};

export default Signin;
