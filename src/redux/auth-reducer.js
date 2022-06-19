import { authAPI } from "../API/api.js";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.data, isAuth: true }

		default:
			return state;
	}
}

const setUserData = (email, userId, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const authUser = () => {
	return dispatch => {
		authAPI.authMe().then(data => {
			if (data.resultCode === 0) {
				let { email, id, login } = data.data
				dispatch(setUserData(email, id, login))
			}
		})
	}
}

export default authReducer