import { AppState } from "./redux-store"

export const selectDialogs = (state: AppState) => state.dialogs.dialogsData
export const selectMessages = (state: AppState) => state.dialogs.msgData