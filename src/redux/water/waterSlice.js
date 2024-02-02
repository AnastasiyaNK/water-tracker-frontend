import { createSlice } from '@reduxjs/toolkit';
import { fetchWater, deleteWater, fetchStats } from './waterOperations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    percentage: '0%',
    waterVolumes: [
      [
        {
          _id: '65bd125ec5a945a46e78dadd',
          waterAmount: 200,
          date: '2024-02-02T12:30:42.667Z',
          owner: '65bd0f94c5a945a46e78dad4',
        },
        {
          _id: '65bd1288c5a945a46e78dae0',
          waterAmount: 440,
          date: '2024-02-02T13:30:24.013Z',
          owner: '65bd0f94c5a945a46e78dad4',
        },
        {
          _id: '65bd1293c5a945a46e78dae3',
          waterAmount: 550,
          date: '2024-02-02T14:30:35.952Z',
          owner: '65bd0f94c5a945a46e78dad4',
        },
      ],
    ],
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
        // let percentage = parseInt(payload[0].percentage);
        // percentage = percentage > 100 ? 100 : percentage;
        // state.percentage = percentage;
        state.waterVolumes = payload.waterVolumes;
        state.isLoading = false;
        console.log(state.waterVolumes, 'state.waterVolumes ');
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
