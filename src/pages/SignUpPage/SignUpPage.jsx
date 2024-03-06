import RegisterForm from "components/RegisterForm/RegisterForm";
import { useEffect } from "react";

const SignUpPage = () => {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    main.classList.add("register-backgroud");

    return () => {
      main.classList.remove("register-backgroud");
    };
  }, []);

  return <RegisterForm />;
};

export default SignUpPage;
