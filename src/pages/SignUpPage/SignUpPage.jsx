import RegisterForm from "components/RegisterForm/RegisterForm";
import React from "react";
import { StyledWrapperPng } from "./SignUpPage.styled";
import { StyledMainContainer } from "../../styled";

const SignUpPage = () => {
  return (
    <StyledWrapperPng>
      <StyledMainContainer>
        <RegisterForm />
      </StyledMainContainer>
    </StyledWrapperPng>
  );
};

export default SignUpPage;
