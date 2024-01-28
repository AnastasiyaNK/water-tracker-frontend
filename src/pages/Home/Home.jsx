import React, { useState } from "react";
import { LoginForm, RegisterForm, SettingsModal } from "components";
import ModalButton from "components/ModalButton/ModalButton";

const Home = () => {
  //TODO:ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);

  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!

  return (
    <div>
      {/* <button className="open-modal-btn" onClick={() => setIsOpenModal(true)}>
        Open modal
      </button>
      {isOpenModal && <AddWaterModal toggleModal={setIsOpenModal} />} */}
      <ModalButton />
      <LoginForm />
      <RegisterForm />
      {isOpenSettingsModal && (
        <SettingsModal toggleModal={setIsOpenSettingsModal} />
      )}
    </div>
  );
};

export default Home;
