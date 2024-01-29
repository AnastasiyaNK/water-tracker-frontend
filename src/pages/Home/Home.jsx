import React, { useState } from "react";
import { LoginForm, RegisterForm, SettingsModal } from "components";
import ModalButton from "components/ModalButton/ModalButton";

import ModalButton2 from "components/ModalButton2/ModalButton2";


const Home = () => {
  //TODO:ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);

  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!

  const [isOpenDailyNorma, setIsOpenDailyNorma] = useState(false);

  return (
    <div>
      {/* <button className="open-modal-btn" onClick={() => setIsOpenModal(true)}>
        Open modal
      </button>
      {isOpenModal && <AddWaterModal toggleModal={setIsOpenModal} />} */}
      <ModalButton />
      <ModalButton2 />
      <LoginForm />
      <RegisterForm />
      {/* {isOpenSettingsModal && (
        <SettingsModal toggleModal={setIsOpenSettingsModal} />
      )} */}
      <button onClick={() => setIsOpenDailyNorma(true)}>
        Edit Daily Norma
      </button>
      {isOpenDailyNorma && (
        <MyDailyNormaModal toggleModal={setIsOpenDailyNorma} />
      )}
    </div>
  );
};

export default Home;
