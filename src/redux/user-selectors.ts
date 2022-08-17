import { AppState } from "./redux-store"

export const selectUsers = (state: AppState) => state.users.users
export const selectPageSize = (state: AppState) => state.users.pageSize
export const selectTotalUsersCount = (state: AppState) => state.users.totalUsersCount
export const selectCurrentPage = (state: AppState) => state.users.currentPage
export const selectIsFetching = (state: AppState) => state.users.isFetching
export const selectFollowInProgressUsers = (state: AppState) => state.users.followInProgressUsers