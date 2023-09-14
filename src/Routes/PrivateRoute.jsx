// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const PrivateRoute = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return isLoggedIn? <LandingPage/> : <Navigate to='/'/>
};

export default PrivateRoute;
