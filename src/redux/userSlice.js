import {
  requestLogin,
  requestRegister,
  requestlogout,
  updateAvatar,
  updateUser,
  setMyDailyNorma,
  setToken,
  requestUserCurrent,
} from "services/api";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const apiUserRegister = createAsyncThunk(
  "user/register",
  async (formData, thunkApi) => {
    try {
      const userData = await requestRegister(formData);
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

export const updateUserInfo = createAsyncThunk(
  "user/updateInfo",
  async (newUserInfo, thunkAPI) => {
    try {
      const data = await updateUser(newUserInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateMyDailyNorma = createAsyncThunk(
  "user/dailyNorma",
  async (newDailyNorma, thunkAPI) => {
    try {
      const data = await setMyDailyNorma(newDailyNorma);
      return data.dailyNorma;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, thunkApi) => {
    try {
      await requestlogout();
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// ------------ Update Refresh ---------------------
export const usersCurrentThunk = createAsyncThunk(
  "user/usersCurrent",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    console.log(state);
    setToken(state.user.token);

    try {
      const respons = await requestUserCurrent();
      console.log(respons.data);

      return respons;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.user.token;
      if (!token) return false;

      return true;
    },
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
      // ------------ Update Refresh ---------------------
      .addCase(usersCurrentThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = action.payload;
      })

      // ------------ Update User Avatar ---------------------
      .addCase(updateUserAvatar.pending, (state) => {
        state.isAvatarLoading = true;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.avatarURL = action.payload;
        state.isAvatarLoading = false;
      })
      .addCase(updateUserAvatar.rejected, (state) => {
        state.isAvatarLoading = false;
      })
      // ------------ Update User Info ---------------------
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload };
        // ------------ Logout User ---------------------
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        return INITIAL_STATE;
      })
      // ------------ Update My Daily Norma ---------------------
      .addCase(updateMyDailyNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.dailyNorma = action.payload;
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
