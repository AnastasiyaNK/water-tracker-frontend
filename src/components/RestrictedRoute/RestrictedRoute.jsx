import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/selectors";

const RestrictedRoute = ({ children }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Navigate to="/home" replace /> : children;
};

export default RestrictedRoute;
