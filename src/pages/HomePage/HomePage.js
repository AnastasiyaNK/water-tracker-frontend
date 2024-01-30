import React from "react";
import { SettingsModal, WaterTracker } from "components";
import { DailyNorma } from "components";
import { Fon } from "./HomePage.styled.js";
import { MyDailyNormaModal } from "components";
import {
  selectSettingsModal,
  selectDailyNormaModal,
} from "../../redux/modalsSelectors.js";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isSettingsModalOpen = useSelector(selectSettingsModal);
  const isDailyNormaModalOpen = useSelector(selectDailyNormaModal);

  return (
    <Fon>
      <DailyNorma />
      <WaterTracker />
      {isSettingsModalOpen && <SettingsModal />}
      {isDailyNormaModalOpen && <MyDailyNormaModal />}
    </Fon>
  );
};

export default HomePage;
