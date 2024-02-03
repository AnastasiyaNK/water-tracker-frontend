import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getWaterNotes, getWaterStats, deleteWaterNote } from 'services/api.js';
import { setToken } from 'services/api';
import axios from 'axios';

const headerAxiosToken = axios.defaults.headers.common.Authorization;

export const fetchWater = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    try {
      const data = await getWaterNotes();
      // return data.length ? data : [{ waterRecords: [], percentage: '0%' }];
      console.log(data);
      return Object.keys(data).length !== 0
        ? data
        : {
            waterVolumePercentage: '0%',
            waterVolumes: [],
          };
    } catch (error) {
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
