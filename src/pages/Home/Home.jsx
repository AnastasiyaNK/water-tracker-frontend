import React from "react";
import { LoginForm, RegisterForm } from "components";
import ModalButton from "components/ModalButton/ModalButton";
import MyDailyNormaModal from "components/MyDailyNormaModal/MyDailyNormaModal";

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
