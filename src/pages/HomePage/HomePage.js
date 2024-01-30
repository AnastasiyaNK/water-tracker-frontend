import React, { useState } from "react";
import { SettingsModal, WaterTracker } from "components";
import { DailyNorma } from "components";
import { Fon } from "./HomePage.styled.js";
import { MyDailyNormaModal } from "components";
import { selectSettingsModal } from "../../redux/modalsSelectors.js";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [isOpenDailyNorma, setIsOpenDailyNorma] = useState(false);
  const isSettingsModalOpen = useSelector(selectSettingsModal);

  return (
    <Fon>
      <DailyNorma toggleModal={setIsOpenDailyNorma} />
      <WaterTracker />
      {isSettingsModalOpen && <SettingsModal />}
      {isOpenDailyNorma && (
        <MyDailyNormaModal toggleModal={setIsOpenDailyNorma} />
      )}
    </Fon>
  );
};

export default HomePage;
