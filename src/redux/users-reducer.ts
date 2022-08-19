import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../API/users-api"
import { UserType } from "../types/types"
import { AppState, InferValueTypes } from "./redux-store"

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 12,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followInProgressUsers: [] as Array<number>
}

let users = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case "users/UPDATE_FOLLOWED_STATUS": {
			return {
				...state,
				users: state.users.map(u => u.id === action.payload.userId ? { ...u, followed: !u.followed } : u),
			}
		}

		case "users/TOGGLE_FOLLOW_PROGRESS": {
			return {
				...state,
				followInProgressUsers: action.payload.inProgress
					? [...state.followInProgressUsers, action.payload.userId]
					: state.followInProgressUsers.filter(id => id !== action.payload.userId)
			}
		}

		case "users/SET_USERS":
		case "users/SET_CURRENT_PAGE":
		case "users/SET_TOTAL_USERS_COUNT":
		case "users/TOGGLE_IS_FETCHING": return { ...state, ...action.payload }

		default: return state;
	}
}

const actions = {
	toggleFollow: (userId: number) => ({ type: "users/UPDATE_FOLLOWED_STATUS", payload: { userId } } as const),
	setUsers: (users: Array<UserType>) => ({ type: 'users/SET_USERS', payload: { users } } as const),
	setCurrentPage: (currentPage: number) => ({ type: 'users/SET_CURRENT_PAGE', payload: { currentPage } } as const),
	setTotalUsersCount: (totalUsersCount: number) => ({ type: 'users/SET_TOTAL_USERS_COUNT', payload: { totalUsersCount } } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: 'users/TOGGLE_IS_FETCHING', payload: { isFetching } } as const),
	toggleFollowProgress: (inProgress: boolean, userId: number) => ({
		type: 'users/TOGGLE_FOLLOW_PROGRESS',
		payload: { inProgress, userId }
	} as const),
}

export const requestUsers = (pageNumber: number, pageSize: number): ThunkType => {
	return async dispatch => {
		dispatch(actions.setCurrentPage(pageNumber))
		dispatch(actions.toggleIsFetching(true))

		const data = await usersAPI.getUsers(pageNumber, pageSize)
		dispatch(actions.toggleIsFetching(false))
		dispatch(actions.setUsers(data.items))
		dispatch(actions.setTotalUsersCount(data.totalCount))
	}
}

export const follow = (isAuth: boolean, isFollowed: boolean, userId: number): ThunkType => {
	return async dispatch => {
		if (isAuth) {
			dispatch(actions.toggleFollowProgress(true, userId));

			const data = isFollowed
				? await usersAPI.unfollowUser(userId)
				: await usersAPI.followUser(userId)
			if (data.resultCode === 0) {
				dispatch(actions.toggleFollow(userId))
				dispatch(actions.toggleFollowProgress(false, userId))
			}
		}
		else {
			alert('you are not authorized!')
		}
	}
}

export default users;

type InitialStateType = typeof initialState
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
type ThunkType = ThunkAction<Promise<void>, AppState, unknown, ActionTypes>