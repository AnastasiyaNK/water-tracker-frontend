import React, { useState } from "react";
import { AddWaterModal, SettingsModal, WaterTracker } from "components";
import { DailyNorma } from "components";
import { Fon } from "./HomePage.styled.js";
import { MyDailyNormaModal } from "components";
import { selectSettingsModal } from "../../redux/modalsSelectors.js";
import { useSelector } from "react-redux";
import ModalButton from "components/ModalButton/ModalButton.jsx";
import ModalButton2 from "components/ModalButton2/ModalButton2.jsx";

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isOpenDailyNorma, setIsOpenDailyNorma] = useState(false);
  const isSettingsModalOpen = useSelector(selectSettingsModal);

  return (
    <Fon>
      <button className="open-modal-btn" onClick={() => setIsOpenModal(true)}>
        Open modal
      </button>
      {isOpenModal && <AddWaterModal toggleModal={setIsOpenModal} />}
      <ModalButton />
      <ModalButton2 />
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
