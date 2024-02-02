import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modals: {
    isSettingsModalOpen: false,
    isDailyNormaModalOpen: false,
    isAddWaterModalOpen: false,
    isEditModalOpen: false,
  },
  selectedWaterPortionId: null,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState: INITIAL_STATE,
  reducers: {
    setSettingsModal(state, action) {
      state.modals.isSettingsModalOpen = action.payload;
    },
    setDailyNormaModal(state, action) {
      state.modals.isDailyNormaModalOpen = action.payload;
    },
    setAddWaterModal(state, action) {
      state.modals.isAddWaterModalOpen = action.payload;
    },
    setEditModal(state, action) {
      state.modals.isEditModalOpen = action.payload.isOpenModal;
      state.selectedWaterPortionId = action.payload.waterPortionId;
    },
    closeAllModals(state) {
      state.modals.isSettingsModalOpen = false;
      state.modals.isDailyNormaModalOpen = false;
      state.modals.isAddWaterModalOpen = false;
      state.modals.isEditModalOpen = false;
    },
  },
});

export const {
  setSettingsModal,
  setDailyNormaModal,
  setAddWaterModal,
  setEditModal,
  closeAllModals,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
