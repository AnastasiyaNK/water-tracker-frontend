import React, { useState } from "react";
import {
  LoginForm,
  RegisterForm,
  SettingsModal,
  AddWaterModal,
} from "components";

const Home = () => {
  //TODO:ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!

  return (
    <div>
      <button onClick={() => setIsOpenModal(true)}>Open modal</button>
      {isOpenModal && <AddWaterModal toggleModal={setIsOpenModal} />}
      <LoginForm />
      <RegisterForm />
      {isOpenSettingsModal && (
        <SettingsModal toggleModal={setIsOpenSettingsModal} />
      )}
    </div>
  );
};

export default Home;
