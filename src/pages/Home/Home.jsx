import React, { useState } from "react";
import { LoginForm, RegisterForm, SettingsModal } from "components";

const Home = () => {
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(true);
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!

  return (
    <div>
      <LoginForm />
      <RegisterForm />
      {isOpenSettingsModal && (
        <SettingsModal toggleModal={setIsOpenSettingsModal} />
      )}
    </div>
  );
};

export default Home;
