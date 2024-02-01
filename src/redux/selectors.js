export const selectUserData = state => state.auth.user;
export const selectUserToken = state => state.auth.token;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserIsSignedIn = state => state.auth.isSignedIn;