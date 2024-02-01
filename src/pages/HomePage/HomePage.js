import React from "react";

import {
  AddWaterModal,
  RangeBar,
  SettingsModal,
  WaterTracker,
} from "components";

import { DailyNorma } from "components";
import { Fon, DailyRangeStyle } from "./HomePage.styled.js";
import { MyDailyNormaModal } from "components";
import {
  selectSettingsModal,
  selectDailyNormaModal,
  selectAddWaterModal,
  selectEditWaterModal,
} from "../../redux/selectors.js";
import { useSelector } from "react-redux";
import ModalButton from "components/ModalButton/ModalButton.jsx";
import ModalButton2 from "components/ModalButton2/ModalButton2.jsx";
import EditWaterModal from "components/EditWaterModal/EditWaterModal.jsx";

const HomePage = () => {
  const isSettingsModalOpen = useSelector(selectSettingsModal);
  const isDailyNormaModalOpen = useSelector(selectDailyNormaModal);
  const isAddWaterModalOpen = useSelector(selectAddWaterModal);
  const isEditWaterModalOpen = useSelector(selectEditWaterModal);

  return (
    <Fon>
      <ModalButton />
      <ModalButton2 />

      <DailyRangeStyle>
        <DailyNorma />
        <RangeBar />
      </DailyRangeStyle>

      <WaterTracker />
      {isAddWaterModalOpen && <AddWaterModal />}
      {isEditWaterModalOpen && <EditWaterModal />}
      {isSettingsModalOpen && <SettingsModal />}
      {isDailyNormaModalOpen && <MyDailyNormaModal />}
    </Fon>
  );
};

export default HomePage;
