import React from "react";
import { StyledHeader } from "./styled";
import { StyledMainContainer } from "styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <StyledMainContainer>
        <Link className="logo">Logo</Link>
        <div className="sign-in-wrapper">
          <Link className="sign-in-link">Sign in</Link>
          <img src="" alt="" />
        </div>
      </StyledMainContainer>
    </StyledHeader>
  );
};

export default Header;
