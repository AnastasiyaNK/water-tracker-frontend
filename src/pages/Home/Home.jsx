import React from "react";
import { LoginForm, Modal, RegisterForm } from "components";

const Home = () => {
  return (
    <div>
      <Modal />
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Home;
