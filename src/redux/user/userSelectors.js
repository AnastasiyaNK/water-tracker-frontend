export const selectUserName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserGender = (state) => state.auth.user.gender;
export const selectUserDailyNorma = (state) => state.auth.user.dailyNorma;
export const selectUserToken = (state) => state.auth.token;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserAvatar = (state) => state.auth.user.avatarURL;
export const selectIsUserAvatarLoading = (state) => state.auth.isAvatarLoading;
