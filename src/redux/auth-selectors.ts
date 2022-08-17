import { AppState } from "./redux-store"

export const selectIsAuthInServer = (state: AppState) => state.auth.isAuthInServer
export const selectErrorMessage = (state: AppState) => state.auth.errorMessage
export const selectErrorField = (state: AppState) => state.auth.errorField
export const selectCaptchaUrl = (state: AppState) => state.auth.captchaUrl
export const selectUserId = (state: AppState) => state.auth.userId
export const selectLogin = (state: AppState) => state.auth.login