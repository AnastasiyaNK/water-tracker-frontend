import React from "react";
import { StyledMainContainer } from "styled";
import { LoginForm } from "components";
import { StyledLoginPage } from "./SignInPage.styled";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <StyledMainContainer>
      <StyledLoginPage>
        <div className="block-right">
          <LoginForm />
          {/*TODO: LATELY REMOVE */}
          <Link to="/home">Home</Link>
        </div>
      </StyledLoginPage>
    </StyledMainContainer>
  );
};

export default SignInPage;
