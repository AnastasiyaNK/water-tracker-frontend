import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/selectors";
import { ROUTE_PATH } from "constants/routes";

const RestrictedRoute = ({ children, redirectTo = ROUTE_PATH.home }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Navigate to={ROUTE_PATH.home} replace /> : children;
};

export default RestrictedRoute;
