import { EmailForm } from "components";
import { useEffect } from "react";
import { StyledMainContainer } from "styled";

const ForgotPassPage = () => {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    main.classList.add("register-backgroud");

    return () => {
      main.classList.remove("register-backgroud");
    };
  }, []);

  return (
    <StyledMainContainer className="register-container">
      <EmailForm />
    </StyledMainContainer>
  );
};

export default ForgotPassPage;
