import React, { useState } from "react";
import { LoginForm, RegisterForm, SettingsModal } from "components";
import MyDailyNormaModal from "components/MyDailyNormaModal/MyDailyNormaModal";

const Home = () => {
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(true);
  //!ТИМЧАСОВО ДЛЯ ЗАКРИТТЯ МОДАЛКИ- ПРИБРАТИ!

  return (
    <div>
      <LoginForm />
      <RegisterForm />
      {/* {isOpenSettingsModal && (
        <SettingsModal toggleModal={setIsOpenSettingsModal} />
      )} */}
      {isOpenSettingsModal && (
        <MyDailyNormaModal toggleModal={setIsOpenSettingsModal} />
      )}
    </div>
  );
};

export default Home;
