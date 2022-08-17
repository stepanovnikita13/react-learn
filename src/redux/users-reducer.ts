import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../API/api.js"
import { UserType } from "../types/types.js"
import { AppState } from "./redux-store.js"

const UPDATE_FOLLOWED_STATUS = "users/UPDATE_FOLLOWED_STATUS"
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_PROGRESS = 'users/TOGGLE_FOLLOW_PROGRESS'

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 12,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followInProgressUsers: [] as Array<number>
}

type InitialStateType = typeof initialState

let users = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case UPDATE_FOLLOWED_STATUS: {
			return {
				...state,
				users: state.users.map(u => u.id === action.payload.userId ? { ...u, followed: !u.followed } : u),
			}
		}

		case TOGGLE_FOLLOW_PROGRESS: {
			return {
				...state,
				followInProgressUsers: action.payload.inProgress
					? [...state.followInProgressUsers, action.payload.userId]
					: state.followInProgressUsers.filter(id => id !== action.payload.userId)
			}
		}

		case SET_USERS: return { ...state, ...action.payload }
		case SET_CURRENT_PAGE: return { ...state, ...action.payload }
		case SET_TOTAL_USERS_COUNT: return { ...state, ...action.payload }
		case TOGGLE_IS_FETCHING: return { ...state, ...action.payload }

		default: return state;
	}
}

type ActionTypes = ToggleFollowActionType | SetUsersActionType | SetCurrentPageActionType |
	SetTotalUsersCountActionType | ToggleIsFetchingActionType | ToggleFollowProgressActionType

type ToggleFollowActionType = { type: typeof UPDATE_FOLLOWED_STATUS, payload: { userId: number } }
const toggleFollow = (userId: number): ToggleFollowActionType => ({ type: UPDATE_FOLLOWED_STATUS, payload: { userId } })

type SetUsersActionType = { type: typeof SET_USERS, payload: { users: Array<UserType> } }
const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, payload: { users } })

type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, payload: { currentPage: number } }
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, payload: { currentPage } })

type SetTotalUsersCountActionType = { type: typeof SET_TOTAL_USERS_COUNT, payload: { totalUsersCount: number } }
const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, payload: { totalUsersCount } })

type ToggleIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING, payload: { isFetching: boolean } }
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } })

type ToggleFollowProgressActionType = { type: typeof TOGGLE_FOLLOW_PROGRESS, payload: { inProgress: boolean, userId: number } }
const toggleFollowProgress = (inProgress: boolean, userId: number): ToggleFollowProgressActionType => ({
	type: TOGGLE_FOLLOW_PROGRESS,
	payload: { inProgress, userId }
})

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, ActionTypes>

export const requestUsers = (pageNumber: number, pageSize: number): ThunkType => {
	return async dispatch => {
		dispatch(setCurrentPage(pageNumber))
		dispatch(toggleIsFetching(true))

		const data = await usersAPI.getUsers(pageNumber, pageSize)
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
	}
}

export const follow = (isAuth: boolean, isFollowed: boolean, userId: number): ThunkType => {
	return async dispatch => {
		if (isAuth) {
			dispatch(toggleFollowProgress(true, userId));

			const data = isFollowed
				? await usersAPI.unfollowUser(userId)
				: await usersAPI.followUser(userId)
			if (data.resultCode === 0) {
				dispatch(toggleFollow(userId))
				dispatch(toggleFollowProgress(false, userId))
			}
		}
		else {
			alert('you are not authorized!')
		}
	}
}

export default users;