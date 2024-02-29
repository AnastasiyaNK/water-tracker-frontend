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
import { StyledHomePageWrapper, DailyRangeStyle } from "./HomePage.styled.js";
import { StyledMainContainer } from "styled";

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
    <StyledMainContainer className="home-container">
      <StyledHomePageWrapper>
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
      </StyledHomePageWrapper>
    </StyledMainContainer>
  );
};

export default HomePage;
