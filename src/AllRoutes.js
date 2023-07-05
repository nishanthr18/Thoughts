import React, { lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Authorization } from "./auth/helper";
// import ProtectedRoute from "./_utils/ProtectedRoute";
import Error from "./home/Error";
const Signup = lazy(() => import("./auth/Signup"));
const Signin = lazy(() => import("./auth/Signin"));
const Feedbacks = lazy(() => import("./home/Feedbacks"));

export const AllRoutes = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = Authorization();
      setToken(token);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/signin" />} />
           <Route
             path="/auth/signin"
             element={!token ? <Signin /> : <Navigate to="/home/feedbacks" />}
          />
          <Route
             path="/auth/signup"
             element={!token ? <Signup /> : <Navigate to="/home/feedbacks" />}
          />
          <Route path="/home/feedbacks"element={token ? <Feedbacks /> : <Navigate to="/auth/signin" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};


      //  {/* <Route
      //       path="/auth/signin"
      //       element={
      //         <ProtectedRoute token={token}>
      //           <Signin />
      //         </ProtectedRoute>
      //       }
      //     />
      //     <Route
      //       path="/auth/signup"
      //       element={
      //         <ProtectedRoute token={token}>
      //           <Signup />
      //         </ProtectedRoute>
      //       }
      //     />
      //     <Route
      //       path="/home/feedbacks"
      //       element={
      //         <ProtectedRoute token={token}>
      //           <Feedbacks />
      //         </ProtectedRoute>
      //       }
      //     /> */}