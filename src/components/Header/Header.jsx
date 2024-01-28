import Logo from "../../assets/icons/logo-water.svg";

import { Wrapper, WrapperLogo } from "./Header.styled";

import { StyledMainContainer } from "styled";
import { UserAuth } from "./UserAuth/UserAuth";
import { ModalHead } from "./UserLogoutModal/UserLogoutModal.styled";

const Header = ({ props }) => {
  return (
    <StyledMainContainer>
      <Wrapper>
        <WrapperLogo to="/welcome">
          <img src={Logo} alt="logo of App" />
        </WrapperLogo>
        <ModalHead />
        <UserAuth />
      </Wrapper>
    </StyledMainContainer>
  );
};

export default Header;
