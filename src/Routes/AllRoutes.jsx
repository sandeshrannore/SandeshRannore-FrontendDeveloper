import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  // Initialize isLoggedIn state with the value from sessionStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );

  // Use useEffect to update isLoggedIn state when sessionStorage changes
  useEffect(() => {
    const storedIsLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn !== storedIsLoggedIn) {
      setIsLoggedIn(storedIsLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        {/* Redirect to LandingPage if isLoggedIn is true */}
        {isLoggedIn ? (
          <Route path="/" element={<Navigate to="/landingPage" />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}

        <Route
          path="/landingPage"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} component={<LandingPage />} />
          }
        />
        <Route
          path="*"
          element={
            isLoggedIn ? <Navigate to="/landingPage" /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
