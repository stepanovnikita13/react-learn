const UPDATE_FOLLOWED_STATUS = "UPDATE_FOLLOWED_STATUS"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true
}

let usersReducer = (state = initialState, action) => {
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
		default: return state;
	}
}

export const toggleFollow = (userId) => ({ type: UPDATE_FOLLOWED_STATUS, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;