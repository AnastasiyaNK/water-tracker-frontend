import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import {
  AddWaterModal,
  LogoutModal,
  RangeBar,
  SettingsModal,
  WaterTracker,
  MyDailyNormaModal,
  DailyNorma,
  EditWaterModal,
  DeleteModal,
} from "components";

import {
  selectSettingsModal,
  selectDailyNormaModal,
  selectAddWaterModal,
  selectEditWaterModal,
  selectLogoutModal,
  selectDeleteWaterModal,
} from "../../redux/modal/modalsSelectors";

import { apiGetTodayWaterPortions } from "../../redux/water/waterSlice.js";
import { closeAllModals } from "../../redux/modal/modalsReduser.js";
import { Fon, DailyRangeStyle } from "./HomePage.styled.js";

const HomePage = () => {
  const isSettingsModalOpen = useSelector(selectSettingsModal);
  const isDailyNormaModalOpen = useSelector(selectDailyNormaModal);
  const isAddWaterModalOpen = useSelector(selectAddWaterModal);
  const isEditWaterModalOpen = useSelector(selectEditWaterModal);
  const isLogoutModalOpen = useSelector(selectLogoutModal);
  const isDeleteModalOpen = useSelector(selectDeleteWaterModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const date = `${format(new Date(), "yyyy")}-${format(
      new Date(),
      "mm"
    )}-${format(new Date(), "dd")}`;
    dispatch(apiGetTodayWaterPortions(date));
    return () => {
      dispatch(closeAllModals());
    };
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
      {isLogoutModalOpen && <LogoutModal />}
      {isDeleteModalOpen && <DeleteModal />}
    </Fon>
  );
};

export default HomePage;
