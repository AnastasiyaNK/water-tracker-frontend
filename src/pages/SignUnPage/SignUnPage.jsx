import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { StyledWrapperPng } from './styled';
import { StyledMainContainer } from 'components/Container.styled';

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