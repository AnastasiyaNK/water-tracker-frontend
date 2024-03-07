import { useEffect } from "react";
import { LoginForm } from "components";

const SignInPage = () => {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    main.classList.add("register-backgroud");

    return () => {
      main.classList.remove("register-backgroud");
    };
  }, []);

  return <LoginForm />;
};

export default SignInPage;
