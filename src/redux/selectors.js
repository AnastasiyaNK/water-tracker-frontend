export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserGender = state => state.auth.user.gender;
export const selectUserToken = state => state.auth.token;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserIsSignedIn = state => state.auth.isSignedIn;
export const selectUserAvatar = state => state.auth.user.avatarURL;
export const selectSettingsModal = state =>
  state.modals.modals.isSettingsModalOpen;

export const selectDailyNormaModal = state =>
  state.modals.modals.isDailyNormaModalOpen;

export const selectAddWaterModal = state =>
  state.modals.modals.isAddWaterModalOpen;

export const selectEditWaterModal = state =>
  state.modals.modals.isEditModalOpen;

export const selectIsUserAvatarLoading = state => state.auth.isAvatarLoading;

export const selectSelectedWaterPortionId = state =>
  state.modals.selectedWaterPortionId;

export const selectIsLoading = state => state.water.isLoading;
export const selectError = state => state.water.error;
export const selectNotes = state => state.water.waterVolumes;
export const selectStats = state => state.water.stats;
export const selectPercent = state => state.water.percentage;
export const selectWaterVolumeSum = state => state.water.waterVolumeSum;
