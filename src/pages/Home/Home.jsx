import React, { useState } from "react";
import { LoginForm, RegisterForm, SettingsModal } from "components";
import MyDailyNormaModal from "components/MyDailyNormaModal/MyDailyNormaModal";

const Home = () => {
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(true);
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!

  const [isOpenDailyNorma, setIsOpenDailyNorma] = useState(false);

  return (
    <div>
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
