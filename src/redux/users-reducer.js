const UPDATE_FOLLOWED_STATUS = "UPDATE_FOLLOWED_STATUS"
const SET_USERS = 'SET_USERS'

let initialState = {
	users: []
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
			return { ...state, users: [...state.users, ...action.users] }
		}
		default: return state;
	}
}

export const toggleFollowAC = (userId) => ({ type: UPDATE_FOLLOWED_STATUS, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;