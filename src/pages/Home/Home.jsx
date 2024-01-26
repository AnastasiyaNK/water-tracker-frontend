import React from "react";
import { LoginForm, RegisterForm, SettingsModal } from "components";

const Home = () => {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
      <SettingsModal></SettingsModal>
    </div>
  );
};

export default Home;
