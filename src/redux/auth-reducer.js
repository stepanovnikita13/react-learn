import { authAPI } from "../API/api.js";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.payload }

		default:
			return state;
	}
}

const setUserData = (email, userId, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const authUser = () => dispatch => {
	return authAPI.authMe().then(data => {
		if (data.resultCode === 0) {
			let { email, id, login } = data.data
			dispatch(setUserData(email, id, login, true))
		}
	})
}

export const login = (email, password, rememberMe) => dispatch => {
	authAPI.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(authUser())
		}
	})
}

export const logout = () => dispatch => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setUserData(null, null, null, false))
		}
	})
}

export default auth