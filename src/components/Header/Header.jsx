import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserAuth from "./UserAuth/UserAuth";
import { StyledHeader } from "./Header.styled";
import { StyledMainContainer } from "../../styled";
import { selectUserIsSignedIn } from "../../redux/user/userSelectors";

import { ReactComponent as MainLogo } from "assets/icons/logo-water.svg";
import { ReactComponent as UserLogo } from "assets/icons/user.svg";

const Header = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <StyledHeader>
      <StyledMainContainer>
        <nav>
          <NavLink to="/welcome" className="link-logo">
            <MainLogo className="main-logo" />
          </NavLink>

          {isSignedIn ? (
            <UserAuth />
          ) : (
            <Link to="/signin" className="user-wrapper">
              <span className="user-name">Sign in</span>
              <UserLogo className="user-logo" />
            </Link>
          )}
        </nav>
      </StyledMainContainer>
    </StyledHeader>
  );
};

export default Header;
