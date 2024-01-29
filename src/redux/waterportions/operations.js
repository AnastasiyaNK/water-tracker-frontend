// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com//';

// export const fetchWaterPortions = createAsyncThunk(
//   'waterportions/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/waterportions');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addWaterPortion = createAsyncThunk(
//   'waterportions/addWaterPortion',
//   async (item, thunkAPI) => {
//     try {
//       const response = await axios.post('/waterportions', item);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteWaterPortion = createAsyncThunk(
//   'waterportions/deleteWaterPortion',
//   async (waterportionsId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/waterportions/${waterportionsId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
