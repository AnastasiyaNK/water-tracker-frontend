import { requestLogin, requestRegister, updateAvatar } from "services/api";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const apiUserRegister = createAsyncThunk(
  "user/register",
  async (formData, thunkApi) => {
    try {
      const userData = await requestRegister(formData);
      // alert('User successfully created, please sign in!');
      return userData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiUserLogin = createAsyncThunk(
  "user/login",
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

export const updateUserAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (newAvatar, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", newAvatar);
      const data = await updateAvatar(formData);
      return data.avatarURL;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  user: {
    id: null,
    email: null,
    name: null,
    avatarURL: null,
    gender: null,
    dailyNorma: null,
  },
  token: null,
  isLoading: false,
  isAvatarLoading: false,
  error: null,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      // ------------ Register User ----------------------
      .addCase(apiUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload.user;
      })
      // ------------ Login User ----------------------
      .addCase(apiUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })

      // ------------ Update User Avatar ---------------------
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.isLoading = true;
        state.user.avatarURL = action.payload;
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
export const userReducer = userSlice.reducer;