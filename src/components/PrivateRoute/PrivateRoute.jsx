import { ROUTE_PATH } from "constants/routes";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/selectors";

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return !isSignedIn ? <Navigate to={ROUTE_PATH.welcome} replace /> : children;
};

export default PrivateRoute;
