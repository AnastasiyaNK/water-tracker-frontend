import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modals: {
    isSettingsModalOpen: false,
    isDailyNormaModalOpen: false,
    isAddWaterModalOpen: false,
    isEditModalOpen: false,
  },
};

const modalsSlice = createSlice({
  name: "modals",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
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
      state.modals.isEditModalOpen = action.payload;
    },
    closeAllModals(state, action) {
      state.modals.isSettingsModalOpen = false;
      state.modals.isDailyNormaModalOpen = false;
      state.modals.isAddWaterModalOpen = false;
      state.modals.isEditModalOpen = false;
    },
  },
});

// Генератори екшенів
export const {
  setSettingsModal,
  setDailyNormaModal,
  setAddWaterModal,
  setEditModal,
  closeAllModals,
} = modalsSlice.actions;
// Редюсер слайсу
export const modalsReducer = modalsSlice.reducer;
