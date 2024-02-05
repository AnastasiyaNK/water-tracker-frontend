import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  requestAddWaterData,
  requestDayWaterData,
  requestDeleteWaterData,
  requestEditWaterData,
  requestMonthWaterData,
} from 'services/api';
import { deleteWater, fetchStats, fetchWater } from './waterOperations';

export const apiGetTodayWaterPortions = createAsyncThunk(
  'water/apiGetTodayWaterPortions',
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
  'water/apiGetMonthWaterPortions',
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
  'water/addWaterPortion',
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
  'water/apiEditWaterPortion',
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
  'water/deleteWaterPortion',
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
  percentage: 0,
  waterVolumes: [],
  stats: [],
  error: null,
  waterVolumeSum: [],
};

const waterSlice = createSlice({
  name: 'water',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
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
          portion => portion._id !== action.payload
        );
      })
      .addCase(apiEditWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.waterVolumes = state.waterVolumes.map(portion =>
          portion._id === action.payload._id
            ? { ...portion, ...action.payload }
            : portion
        );
      })
      /// Fetch
      .addCase(fetchWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWater.fulfilled, (state, { payload }) => {
        let percentage = parseInt(payload.waterVolumePercentage);
        percentage = percentage > 100 ? 100 : percentage;
        state.percentage = percentage;
        state.waterVolumes = payload.waterVolumes;
        state.isLoading = false;
      })
      .addCase(fetchWater.rejected, (state, { payload }) => {
        rejectError(state, payload);
      })

      .addCase(deleteWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        state.waterVolumes = state.waterVolumes.filter(
          waterVolumes => waterVolumes._id !== payload
        );
        state.isLoading = false;
      })
      .addCase(deleteWater.rejected, (state, { payload }) => {
        rejectError(state, payload);
      })
      /// get statistic data for month
      .addCase(fetchStats.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchStats.fulfilled, (state, { payload }) => {
        state.stats = payload;
        console.log(state.stats, 'state.stats');
        state.isLoading = false;
      })
      .addCase(fetchStats.rejected, (state, { payload }) => {
        rejectError(state, payload);
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
function rejectError(state, payload) {
  state.isLoading = false;
  state.error = payload;
}
export const waterReducer = waterSlice.reducer;
