import { requestLogin, requestRegister } from 'services/api';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const apiUserRegister = createAsyncThunk(
  'user/register',
  async (formData, thunkApi) => {
    try {
      const userData = await requestRegister(formData);
      console.log(userData);
      return userData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiUserLogin = createAsyncThunk(
  'user/login',
  async (formData, thunkApi) => {
    try {
      const userData = await requestLogin(formData);
      console.log(userData);
      return userData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      // ------------ Register User ----------------------
      .addCase(apiUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      // ------------ ADD CONTACT ----------------------
      .addCase(apiUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
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
export const userReducer = userSlice.reducer;
