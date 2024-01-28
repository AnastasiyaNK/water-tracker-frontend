// // import { createSlice } from '@reduxjs/toolkit';
// import {
//   fetchWaterPortions,
//   addWaterPortion,
//   deleteWaterPortion,
// } from './operations.js';

// // const handlePending = state => {
// //   state.isLoading = true;
// // };

// // const handleRejected = (state, action) => {
// //   state.isLoading = false;
// //   state.error = action.payload;
// // };

// // const InitialState = {
// //   list: [],
// //   isLoading: false,
// //   error: null,
// // };

// // const waterportionsSlice = createSlice({
// //   name: 'waterportions',
// //   initialState: InitialState,
// //   extraReducers: {
// //     [fetchWaterPortions.pending]: handlePending,
// //     [fetchWaterPortions.fulfilled](state, action) {
// //       state.isLoading = false;
// //       state.error = null;
// //       state.list = action.payload;
// //     },
// //     [fetchWaterPortions.rejected]: handleRejected,
// //     [addWaterPortion.pending]: handlePending,
// //     [addWaterPortion.fulfilled](state, action) {
// //       state.isLoading = false;
// //       state.error = null;
// //       state.list.push(action.payload);
// //     },
// //     [addWaterPortion.rejected]: handleRejected,
// //     [deleteWaterPortion.pending]: handlePending,
// //     [deleteWaterPortion.fulfilled](state, action) {
// //       state.isLoading = false;
// //       state.error = null;
// //       const index = state.list.findIndex(task => task.id === action.payload.id);
// //       state.list.splice(index, 1);
// //     },
// //     [deleteWaterPortion.rejected]: handleRejected,
// //   },
// // });

// // export const waterportionsReducer = waterportionsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const InitialState = {
//   list: [],
//   isLoading: false,
//   error: null,
// };

// const waterportionsSlice = createSlice({
//   name: 'waterportions',
//   initialState: InitialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchWaterPortions.pending, handlePending)
//       .addCase(fetchWaterPortions.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.list = action.payload;
//       })
//       .addCase(fetchWaterPortions.rejected, handleRejected)
//       .addCase(addWaterPortion.pending, handlePending)
//       .addCase(addWaterPortion.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.list.push(action.payload);
//       })
//       .addCase(addWaterPortion.rejected, handleRejected)
//       .addCase(deleteWaterPortion.pending, handlePending)
//       .addCase(deleteWaterPortion.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.list.findIndex(
//           task => task.id === action.payload.id
//         );
//         state.list.splice(index, 1);
//       })
//       .addCase(deleteWaterPortion.rejected, handleRejected);
//   },
// });

// export const waterportionsReducer = waterportionsSlice.reducer;
