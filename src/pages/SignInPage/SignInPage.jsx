import React from "react";

import { LoginForm } from "components";
import { StyledLoginPage } from "./SignInPage.styled";

const SignInPage = () => {
  return (
    <StyledLoginPage>
      <LoginForm />
    </StyledLoginPage>
  );
};

export default SignInPage;
