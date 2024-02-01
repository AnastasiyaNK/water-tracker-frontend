import React from "react";
import { StyledMainContainer } from "styled";
import { LoginForm } from "components";
import { StyledLoginPage } from "./SigninPage.styled";

const SignInPage = () => {
  return (
    <StyledMainContainer>
      <StyledLoginPage>
        <div className="block-right">
          <LoginForm />
        </div>
      </StyledLoginPage>
    </StyledMainContainer>
  );
};

export default SignInPage;
