import RegisterForm from "components/RegisterForm/RegisterForm";
import React from "react";
import { StyledWrapperPng } from "./SignUpPage.styled";

const SignUpPage = () => {
  return (
    <StyledWrapperPng>
      <RegisterForm />
    </StyledWrapperPng>
  );
};

export default SignUpPage;
