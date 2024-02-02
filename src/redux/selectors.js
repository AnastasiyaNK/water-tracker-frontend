export const selectUserName = (state) => state.auth.user.name;
export const selectUserToken = (state) => state.auth.token;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserAvatar = (state) => state.auth.user.avatarURL;
export const selectSettingsModal = (state) =>
  state.modals.modals.isSettingsModalOpen;

export const selectDailyNormaModal = (state) =>
  state.modals.modals.isDailyNormaModalOpen;

export const selectAddWaterModal = (state) =>
  state.modals.modals.isAddWaterModalOpen;

export const selectEditWaterModal = (state) =>
  state.modals.modals.isEditModalOpen;

export const selectIsUserAvatarLoading = (state) => state.auth.isAvatarLoading;
