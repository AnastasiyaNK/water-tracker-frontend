import { useEffect } from "react";
import { ResetPasswordForm } from "components";
import { StyledMainContainer } from "styled";

const NewPassPage = () => {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    main.classList.add("register-backgroud");

    return () => {
      main.classList.remove("register-backgroud");
    };
  }, []);

  return (
    <StyledMainContainer className="register-container">
      <ResetPasswordForm />
    </StyledMainContainer>
  );
};

export default NewPassPage;
