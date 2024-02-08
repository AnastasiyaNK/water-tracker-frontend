import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE_PATH } from "constants/routes";
import { selectUserIsSignedIn } from "../../redux/user/userSelectors";

const RestrictedRoute = ({ children, redirectTo = ROUTE_PATH.home }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Navigate to={ROUTE_PATH.home} replace /> : children;
};

export default RestrictedRoute;
