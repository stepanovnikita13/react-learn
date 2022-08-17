import { AppState } from "./redux-store"

export const selectProfile = (state: AppState) => state.profile.profile
export const selectStatus = (state: AppState) => state.profile.status
export const selectErrors = (state: AppState) => state.profile.errors