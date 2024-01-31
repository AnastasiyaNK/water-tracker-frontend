import React from 'react';
import { StyledLoginPage } from './styled';
import { LoginForm } from 'components';
import { StyledMainContainer } from 'components/Container.styled';

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