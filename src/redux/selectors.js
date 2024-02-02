export const selectUserData = state => state.auth.user;
export const selectUserToken = state => state.auth.token;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserIsSignedIn = state => state.auth.isSignedIn;

export const selectIsLoading = state => state.water.isLoading;
export const selectError = state => state.water.error;
export const selectNotes = state => state.water.waterVolumes;
export const selectStats = state => state.water.stats;
export const selectPercent = state => state.water.percentage;
export const selectWaterVolumeSum = state => state.water.waterVolumeSum;
