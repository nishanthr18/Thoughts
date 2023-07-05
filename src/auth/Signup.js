import React, { useRef, useState, useEffect } from "react";
import { singupCall, Authenticate } from "./helper";
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

const Signup = () => {
  const [index, setIndex] = useState(0);
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % pictures.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const signup = async () => {
    setLoading(true)
    const user = {
      profilePic: profilePic,
      name: nameRef.current.value,
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };
    return await singupCall(user).then((response) => {
      console.log(response["token"]);
      if (response["token"]) {
        let token = response["token"];
        Authenticate(token, () => {
          document.location.reload();
          navigate("/home/feedbacks");
          setLoading(false)
        });
      }
    });
  };

  return (
    <div className="signin_container">
      <div className="signin_header_container">
      <p className="header_text">
          <span className="my_mysuru" style={{ color: "#20c8b98c" }}>MY-MYSURU </span>one page, many
          stories!
        </p>
      </div>

      <div className="signin_body_container">
        <div className="bg_container">
          <img  className="bg_img" src={pictures[index]} alt="bg" />
        </div>

        <div className="signin_form">
          <div className="header">
            <span>Welcome, please Sign-up.</span>
          </div>

          <div className="form_content">
            <input
              className="file_input"
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
            <input ref={nameRef} type="text" placeholder="name" />
            <input ref={usernameRef} type="text" placeholder="username" />
            <input ref={passwordRef} type="password" placeholder="password" />
            <button onClick={signup}>{!loading ? 'sign-up' : 'Authenticating...'}</button>
          </div>

          <div className="footer">
            <p>
              Existing user? please{" "}
              <span onClick={() => navigate("/auth/signin")}>sign-in</span>{" "}
              here.
            </p>
          </div>
        </div>
      </div>

      <div className="signin_footer_container">
        <div className="footer_header">
          <span>
            Your feedbacks do really matters. We read all your feedbacks, Thank
            you in advance.
          </span>
        </div>
        <div className="footer_body">
          <>
            <span style={{color:"#fff"}}>contact: mymysuru2015@gmail.com</span>
          </>
          <>
            <a href="https://instagram.com/my_mysuru" target="_blank" rel="noreferrer">
              <img src={insta} alt="insta" />
            </a>
            <a href="https://m.facebook.com/mymysuru" target="_blank" rel="noreferrer">
              <img src={fb} alt="fb" />
            </a>
          </>
        </div>
      </div>
    </div>
  );
};

export default Signup;
