import Logo from "../../assets/icons/logo-water.svg";

import { Wrapper, WrapperLogo } from "./Header.styled";

import { StyledMainContainer } from "styled";
import { UserAuth } from "./UserAuth/UserAuth";

const Header = ({ props }) => {
  return (
    <StyledMainContainer>
      <Wrapper>
        <WrapperLogo to="/welcome">
          <img src={Logo} alt="logo of App" />
        </WrapperLogo>

        <UserAuth />
      </Wrapper>
    </StyledMainContainer>
  );
};

export default Header;
