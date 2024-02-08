import { ROUTE_PATH } from "constants/routes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/user/userSelectors";

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return !isSignedIn ? <Navigate to={ROUTE_PATH.welcome} replace /> : children;
};

export default PrivateRoute;
