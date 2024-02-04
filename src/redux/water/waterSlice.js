import { createSlice } from '@reduxjs/toolkit';
import { fetchWater, deleteWater, fetchStats } from './waterOperations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    percentage: '0%',
    waterVolumes: [],
    stats: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
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
        state.isLoading = false;
      })
      .addCase(fetchStats.rejected, (state, { payload }) => {
        rejectError(state, payload);
      }),
});

function rejectError(state, payload) {
  state.isLoading = false;
  state.error = payload;
}

export const waterReducer = waterSlice.reducer;
