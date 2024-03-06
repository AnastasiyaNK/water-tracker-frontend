import {
  requestLogin,
  requestRegister,
  requestlogout,
  updateAvatar,
  updateUser,
  setMyDailyNorma,
  setToken,
  requestUserCurrent,
  requestVeryfyEmail,
  getLinkToUpdatePass,
  requestResetPassword,
} from "services/api/api";

import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { toastFulfild, toastRejected } from "services/UserNotification";

export const apiUserRegister = createAsyncThunk(
  "user/register",
  async (formData, thunkApi) => {
    try {
      const userData = await requestRegister(formData);
      toastFulfild("User successfully created! Please confirm your e-mail.");
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiUserLogin = createAsyncThunk(
  "user/login",
  async (formData, thunkApi) => {
    try {
      const userData = await requestLogin(formData);
      toastFulfild("You have successfully logged into your account!");
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const usersGoogleAuth = createAsyncThunk(
  "user/google",
  async (token, thunkAPI) => {
    try {
      setToken(token);
      const respons = await requestUserCurrent();
      toastFulfild("You have successfully logged into your account!");
      return respons;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resendVerifyEmail = createAsyncThunk(
  "user/verify",
  async (email, thunkAPI) => {
    await requestVeryfyEmail(email);
    toastFulfild(
      "The verification email has been resent. Please check your e-mail."
    );
    try {
    } catch (error) {
      toastRejected("Something went wrong. Try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getLinkToChangePass = createAsyncThunk(
  "user/forgotPassword",
  async (formData, thunkApi) => {
    try {
      const userData = await getLinkToUpdatePass(formData);
      toastFulfild(
        "A letter with more details has been sent to your email, please check it out!"
      );
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const resetUserPassword = createAsyncThunk(
  "user/resetPassword",
  async (formData, thunkApi) => {
    try {
      await requestResetPassword(formData);
      toastFulfild("Password has been successfully changed!");
      // return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
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
      toastFulfild("Your avatar has been successfully updated!");
      return data.avatarURL;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "user/updateInfo",
  async (newUserInfo, thunkAPI) => {
    try {
      const data = await updateUser(newUserInfo);
      toastFulfild("Your data has been successfully updated!");
      return data;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateMyDailyNorma = createAsyncThunk(
  "user/dailyNorma",
  async (newDailyNorma, thunkAPI) => {
    try {
      const data = await setMyDailyNorma(newDailyNorma);
      toastFulfild("Your daily water allowance has been successfully updated!");
      return data.dailyNorma;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
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
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// ------------ Update Refresh ---------------------
export const usersCurrentThunk = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      setToken(state.auth.token);
      const respons = await requestUserCurrent();
      return respons;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
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
      .addCase(usersGoogleAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = action.payload;
        state.token = action.payload.token;
      })

      // ------------ Login User ----------------------
      .addCase(apiUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })

      //--------------Reset User password----------------
      .addCase(getLinkToChangePass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload.user;
      })

      .addCase(resetUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
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
        isAnyOf(
          apiUserRegister.pending,
          usersGoogleAuth.pending,
          apiUserLogin.pending,
          usersCurrentThunk.pending,
          updateUserInfo.pending,
          updateMyDailyNorma.pending,
          getLinkToChangePass.pending,
          resetUserPassword.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiUserRegister.rejected,
          usersGoogleAuth.rejected,
          apiUserLogin.rejected,
          usersCurrentThunk.rejected,
          updateUserInfo.rejected,
          updateMyDailyNorma.rejected,
          getLinkToChangePass.rejected,
          resetUserPassword.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const userReducer = userSlice.reducer;
