import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  requestAddWaterData,
  requestDayWaterData,
  requestDeleteWaterData,
  requestEditWaterData,
  requestMonthWaterData,
} from "services/api";

export const apiGetTodayWaterPortions = createAsyncThunk(
  "water/apiGetTodayWaterPortions",
  async (date, thunkAPI) => {
    try {
      const response = await requestDayWaterData(date);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const apiGetMonthWaterPortions = createAsyncThunk(
  "water/apiGetMonthWaterPortions",
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await requestMonthWaterData(month, year);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiAddWaterPortion = createAsyncThunk(
  "water/addWaterPortion",
  async (formData, thunkAPI) => {
    try {
      const response = await requestAddWaterData(formData);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const apiEditWaterPortion = createAsyncThunk(
  "water/apiEditWaterPortion",
  async ({ portionId, formData }, thunkAPI) => {
    try {
      const response = await requestEditWaterData(portionId, formData);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiDeleteWaterPortion = createAsyncThunk(
  "water/deleteWaterPortion",
  async (portionId, thunkAPI) => {
    try {
      await requestDeleteWaterData(portionId);

      return portionId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const INITIAL_STATE = {
  waterData: null,
  todayWaterData: null,
  isLoading: false,
};

const waterSlice = createSlice({
  name: "water",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder

      .addCase(apiGetTodayWaterPortions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayWaterData = action.payload;
      })

      .addCase(apiGetMonthWaterPortions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterData = action.payload;
      })
      .addCase(apiAddWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayWaterData.waterVolumes.push(action.payload);
        state.todayWaterData.waterVolumeSum += action.payload.waterAmount;
      })
      .addCase(apiDeleteWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayWaterData.waterVolumes =
          state.todayWaterData.waterVolumes.filter(
            (portion) => portion._id !== action.payload
          );
      })
      .addCase(apiEditWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todayWaterData.waterVolumes =
          state.todayWaterData.waterVolumes.map((portion) =>
            portion._id === action.payload._id
              ? { ...portion, ...action.payload }
              : portion
          );
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const waterReducer = waterSlice.reducer;
