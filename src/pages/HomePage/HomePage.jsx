import React, { useEffect } from "react";
import { format } from "date-fns";
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
} from "../../redux/modalsSelectors.js";
import { useDispatch, useSelector } from "react-redux";
import EditWaterModal from "components/EditWaterModal/EditWaterModal.jsx";
import { apiGetTodayWaterPortions } from "../../redux/water/waterSlice.js";

const HomePage = () => {
  const isSettingsModalOpen = useSelector(selectSettingsModal);
  const isDailyNormaModalOpen = useSelector(selectDailyNormaModal);
  const isAddWaterModalOpen = useSelector(selectAddWaterModal);
  const isEditWaterModalOpen = useSelector(selectEditWaterModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const date = `${format(new Date(), "yyyy")}-${format(
      new Date(),
      "mm"
    )}-${format(new Date(), "dd")}`;
    dispatch(apiGetTodayWaterPortions(date));
  }, [dispatch]);

  return (
    <Fon>
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
