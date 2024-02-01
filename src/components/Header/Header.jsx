import { ReactComponent as MainLogo } from "assets/icons/logo-water.svg";
import { ReactComponent as UserLogo } from "assets/icons/user.svg";
import { Link, NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { StyledMainContainer } from "../../styled";

import { useSelector } from "react-redux";
import { selectUserIsSignedIn } from "../../redux/selectors";
import UserAuth from "./UserAuth/UserAuth";

const Header = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <StyledMainContainer>
      <StyledHeader>
        <NavLink to="/welcome" className="link-logo">
          <MainLogo className="main-logo" />
        </NavLink>
        <Link to="/signin" className="user-wrapper">
          <p className="user-name">Sign in</p>
          <UserLogo className="user-logo" />
        </Link>
        {isSignedIn ? (
          <UserAuth />
        ) : (
          <Link to="/signin" className="user-wrapper">
            <p className="user-name">Sign in</p>
            <UserLogo className="user-logo" />
          </Link>
        )}
        ;
        {/* {isSignedIn ? (
          <UserAuth />
        ) : (
          <Link to="/signin" className="user-wrapper">
            <p className="user-name">Sign in</p>
            <UserLogo className="user-logo" />
          </Link>
        )} */}
      </StyledHeader>
    </StyledMainContainer>
  );
};

export default Header;
