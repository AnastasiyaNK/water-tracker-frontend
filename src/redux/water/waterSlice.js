import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  requestAddWaterData,
  requestDayWaterData,
  requestDeleteWaterData,
  requestEditWaterData,
  requestMonthWaterData,
} from "services/api/api";

import { format } from "date-fns";

export const apiGetTodayWaterPortions = createAsyncThunk(
  "water/apiGetTodayWaterPortions",
  async (_, thunkAPI) => {
    try {
      const response = await requestDayWaterData();
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
      const data = await requestMonthWaterData(month, year);

      thunkAPI.dispatch(apiGetTodayWaterPortions());

      return Object.keys(data).length !== 0
        ? data
        : {
            waterVolumePercentage: "0%",
            waterVolumes: [],
          };
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
      thunkAPI.dispatch(
        apiGetMonthWaterPortions({
          month: format(new Date(), "LL"),
          year: format(new Date(), "yyyy"),
        })
      );
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
      thunkAPI.dispatch(
        apiGetMonthWaterPortions({
          month: format(new Date(), "LL"),
          year: format(new Date(), "yyyy"),
        })
      );

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
      thunkAPI.dispatch(
        apiGetMonthWaterPortions({
          month: format(new Date(), "LL"),
          year: format(new Date(), "yyyy"),
        })
      );
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
  percentage: 0,
  waterVolumes: [],
  stats: [],
  error: null,
  waterVolumeSum: [],
};

const waterSlice = createSlice({
  name: "water",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder

      // .addCase(apiGetTodayWaterPortions.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.todayWaterData = action.payload;
      //     console.log(state.todayWaterData, 'state.todayWaterData');
      // })

      .addCase(apiGetTodayWaterPortions.fulfilled, (state, { payload }) => {
        let percentage = parseInt(payload.waterVolumePercentage);
        percentage = percentage > 100 ? 100 : percentage;
        state.percentage = percentage;
        state.waterVolumes = payload.waterVolumes;
        state.isLoading = false;
      })

      .addCase(apiGetMonthWaterPortions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
      })
      .addCase(apiAddWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterVolumes.push(action.payload);
        state.waterVolumeSum += action.payload.waterAmount;
      })
      .addCase(apiDeleteWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterVolumes = state.waterVolumes.filter(
          (portion) => portion._id !== action.payload
        );
      })
      .addCase(apiEditWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterVolumes = state.waterVolumes.map((portion) =>
          portion._id === action.payload._id
            ? { ...portion, ...action.payload }
            : portion
        );
      })
      /// Fetch
      // .addCase(fetchWaterToday.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchWaterToday.fulfilled, (state, { payload }) => {
      //   let percentage = parseInt(payload.waterVolumePercentage);
      //   percentage = percentage > 100 ? 100 : percentage;
      //   state.percentage = percentage;
      //   state.waterVolumes = payload.waterVolumes;
      //   state.isLoading = false;
      // })
      // .addCase(fetchWaterToday.rejected, (state, { payload }) => {
      //   rejectError(state, payload);
      // })

      // .addCase(deleteWater.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteWater.fulfilled, (state, { payload }) => {
      //   state.waterVolumes = state.waterVolumes.filter(
      //     (waterVolumes) => waterVolumes._id !== payload
      //   );
      //   state.isLoading = false;
      // })
      // .addCase(deleteWater.rejected, (state, { payload }) => {
      //   rejectError(state, payload);
      // })
      // /// get statistic data for month
      // .addCase(fetchStats.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchStats.fulfilled, (state, { payload }) => {
      //   state.stats = payload;
      //   console.log(state.stats, "state.stats");
      //   state.isLoading = false;
      // })
      // .addCase(fetchStats.rejected, (state, { payload }) => {
      //   rejectError(state, payload);
      // })

      // .addMatcher(
      //   (action) => action.type.endsWith("/pending"),
      //   (state, action) => {
      //     state.isLoading = true;
      //     state.error = null;
      //   }
      // )
      // .addMatcher(
      //   (action) => action.type.endsWith("/rejected"),
      //   (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   }
      // ),
      .addMatcher(
        isAnyOf(
          apiGetTodayWaterPortions.pending,
          apiGetMonthWaterPortions.pending,
          apiAddWaterPortion.pending,
          apiDeleteWaterPortion.pending,
          apiEditWaterPortion.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetTodayWaterPortions.rejected,
          apiGetMonthWaterPortions.rejected,
          apiAddWaterPortion.rejected,
          apiDeleteWaterPortion.rejected,
          apiEditWaterPortion.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const waterReducer = waterSlice.reducer;
