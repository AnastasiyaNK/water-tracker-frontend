import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getWaterNotes,
  getWaterStats,
  deleteWaterNote,
} from 'services/apiWater.js';
import { setToken } from 'services/api';
import axios from 'axios';

const headerAxiosToken = axios.defaults.headers.common.Authorization;

export const fetchWater = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    if (!headerAxiosToken) {
      setToken(thunkAPI.getState().auth.token);
    }
    try {
      const data = await getWaterNotes();
      // return data.length ? data : [{ waterRecords: [], percentage: '0%' }];
      console.log(data, 'today');
      return Object.keys(data).length !== 0
        ? data
        : { waterVolumeSum: '0', waterVolumes: [] };
    } catch (error) {
      // toast.error(
      //   `Oops. Something goes wrong. Please try again!`
      // );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchStats = createAsyncThunk(
  'water/stats',
  async (month, { rejectWithValue, getState }) => {
    if (!headerAxiosToken) {
      setToken(getState().auth.token);
    }
    try {
      const data = await getWaterStats(month);
      return data;
    } catch (error) {
      toast.error(`Oops. Something goes wrong. Please try again!`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterNoteId, { rejectWithValue }) => {
    try {
      await deleteWaterNote(waterNoteId);
      toast.success(`Your record was deleted`);
      return waterNoteId;
    } catch (error) {
      toast.error(`Oops. Something goes wrong. Please try again!`);
      return rejectWithValue(error.message);
    }
  }
);

// {
//   "waterVolumeSum": 400,
//   "waterVolumes": [
//     {
//       "_id": "65ba589cab96c7a17ee3fd",
//       "waterAmount": 350,
//       "date": "2024-01-31T12:30:02.593Z",
//       "owner": "23fa589cab96c7a17ee3fd"
//     }
//   ]
// }

// if (Object.keys(myObject).length === 0) {
//   console.log("Об'єкт порожній");
// }
