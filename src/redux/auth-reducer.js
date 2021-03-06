import { authAPI } from "../API/api.js";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_ERROR = 'auth/SET_ERROR'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

let initialState = {
	userId: null,
	email: null,
	login: null,
	errorField: null,
	errorMessage: null,
	captchaUrl: null,
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: return { ...state, ...action.payload }
		case SET_CAPTCHA_URL: return { ...state, ...action.payload }
		case SET_ERROR:
			return {
				...state,
				errorField: action.payload.errorField?.map(f => f.field).toString(),
				errorMessage: action.payload.errorMessage?.toString()
			}

		default:
			return state;
	}
}

const setUserData = (email, userId, login) => ({ type: SET_USER_DATA, payload: { userId, email, login } })
const setError = (errorMessage, errorField = null) => ({ type: SET_ERROR, payload: { errorMessage, errorField } })
const setCaptchaUrl = captchaUrl => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })

export const authUser = () => async dispatch => {
	const data = await authAPI.authMe()
	if (data.resultCode === 0) {
		let { email, id, login } = data.data
		dispatch(setUserData(email, id, login))
	} else {
		dispatch(setUserData(null, null, null))
	}
}

export const getCaptchaUrl = () => async dispatch => {
	const res = await authAPI.getCaptchaUrl()
	const captchaUrl = res.data.url
	dispatch(setCaptchaUrl(captchaUrl))
}

export const login = (email, password, rememberMe, captcha, setIsAuth) => async dispatch => {
	dispatch(setError(null, null))
	const data = await authAPI.login(email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		dispatch(authUser())
		setIsAuth(true)
	}
	else {
		if (data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
		dispatch(setError(data.messages, [...data.fieldsErrors]))
	}
}

export const logout = (setIsAuth) => async dispatch => {
	let data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setUserData(null, null, null))
		setIsAuth(false)
	}
}

export default auth