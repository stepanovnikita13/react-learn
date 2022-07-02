import { usersAPI } from "../API/api.js"

const UPDATE_FOLLOWED_STATUS = "UPDATE_FOLLOWED_STATUS"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS'

let initialState = {
	users: [],
	pageSize: 12,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followInProgressUsers: []
}

let users = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_FOLLOWED_STATUS: {
			return {
				...state,
				users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u)
			}
		}
		case SET_USERS: {
			return { ...state, users: [...action.users] }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_FOLLOW_PROGRESS: {
			return {
				...state,
				followInProgressUsers: action.inProgress
					? [...state.followInProgressUsers, action.userId]
					: state.followInProgressUsers.filter(id => id !== action.userId)
			}
		}
		default: return state;
	}
}

const toggleFollow = userId => ({ type: UPDATE_FOLLOWED_STATUS, userId })
const setUsers = users => ({ type: SET_USERS, users })
const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
const setTotalUsersCount = totalCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowProgress = (inProgress, userId) => ({ type: TOGGLE_FOLLOW_PROGRESS, inProgress, userId })

export const requestUsers = (pageNumber, pageSize) => dispatch => { //ThunkCreator
	dispatch(setCurrentPage(pageNumber))
	dispatch(toggleIsFetching(true))

	usersAPI.getUsers(pageNumber, pageSize).then(data => {
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
	})
}

export const follow = (isAuth, isFollowed, userId) => dispatch => {
	if (isAuth) {
		dispatch(toggleFollowProgress(true, userId));
		(isFollowed ? usersAPI.unfollowUser(userId) : usersAPI.followUser(userId)).then(data => {
			if (data.resultCode === 0) {
				dispatch(toggleFollow(userId))
				dispatch(toggleFollowProgress(false, userId))
			}
		})
	}
	else {
		alert('you are not authorized!')
	}
}

export default users;