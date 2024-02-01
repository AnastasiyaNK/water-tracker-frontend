import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  waterData: null,
  isLoading: false,
};

const waterSlice = createSlice({
  name: "water",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
});

export const waterReducer = waterSlice.reducer;
