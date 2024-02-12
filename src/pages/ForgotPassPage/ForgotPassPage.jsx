import { EmailForm } from "components";
import { StyledMainContainer } from "styled";
import { StyledForgotPassWrapper } from "./ForgotPassPage.styled";

const ForgotPassPage = () => {
  return (
    <StyledForgotPassWrapper>
      <StyledMainContainer>
        <EmailForm />
      </StyledMainContainer>
    </StyledForgotPassWrapper>
  );
};

export default ForgotPassPage;
