
import React, { useEffect } from "react";
import { format } from "date-fns";

import {
  AddWaterModal,
  LogoutModal,
  RangeBar,
  SettingsModal,
  WaterTracker,
  MyDailyNormaModal,
   DailyNorma
} from 'components';

import { Fon, DailyRangeStyle } from './HomePage.styled.js';

import {
  selectSettingsModal,
  selectDailyNormaModal,
  selectAddWaterModal,
  selectEditWaterModal,
   selectLogoutModal,
} from '../../redux/selectors.js';

import EditWaterModal from 'components/EditWaterModal/EditWaterModal.jsx';


import { useDispatch, useSelector } from "react-redux";

import { apiGetTodayWaterPortions } from "../../redux/water/waterSlice.js";
import { closeAllModals } from "../../redux/modalsReduser.js";


const HomePage = () => {
  const isSettingsModalOpen = useSelector(selectSettingsModal);
  const isDailyNormaModalOpen = useSelector(selectDailyNormaModal);
  const isAddWaterModalOpen = useSelector(selectAddWaterModal);
  const isEditWaterModalOpen = useSelector(selectEditWaterModal);
  const isLogoutModalOpen = useSelector(selectLogoutModal);
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
    </Fon>
  );
};

export default HomePage;
