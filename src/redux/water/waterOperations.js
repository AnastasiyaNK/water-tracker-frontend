import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getWaterNotes, getWaterStats, deleteWaterNote } from 'services/api.js';

export const fetchWater = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    try {
      const data = await getWaterNotes();
      return Object.keys(data).length !== 0
        ? data
        : {
            waterVolumePercentage: 0,
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
    try {
      const data = await getWaterStats(month);
      console.log(data, 'stats my');
      return Object.values(data);
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
