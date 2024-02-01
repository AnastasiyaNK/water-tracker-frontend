import React from "react";
import { RangeBar, WaterTracker, SettingsModal } from "components";
import { DailyNorma } from "components";
import { Fon, DailyRangeStyle } from "./HomePage.styled.js";
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
      <DailyRangeStyle>
        <DailyNorma />
        <RangeBar />
      </DailyRangeStyle>
      <WaterTracker />
      {isSettingsModalOpen && <SettingsModal />}
      {isDailyNormaModalOpen && <MyDailyNormaModal />}
    </Fon>
  );
};

export default HomePage;
