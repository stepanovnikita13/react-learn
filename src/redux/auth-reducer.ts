import { ThunkAction } from "redux-thunk";
import { authAPI } from "../API/api.js";
import { AppState } from "./redux-store.js";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_ERROR = 'auth/SET_ERROR'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

const initialState = {
	isAuthInServer: undefined as boolean | undefined,
	userId: null as (number | null),
	email: null as string | null,
	login: null as string | null,
	errorField: undefined as string | undefined,
	errorMessage: undefined as string | undefined,
	captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState

const auth = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA: return { ...state, ...action.payload }
		case SET_CAPTCHA_URL: return { ...state, ...action.payload }
		case SET_ERROR:
			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
}
type ActionTypes = SetUserDataActionType | SetErrorActonType | SetCaptchaUrlActionType

type SetUserDataActionPayloadType = {
	email: string | null,
	userId: number | null,
	login: string | null,
	isAuthInServer: boolean
}
type SetUserDataActionType = {
	type: typeof SET_USER_DATA,
	payload: SetUserDataActionPayloadType
}
const setUserData = (email: string | null, userId: number | null, login: string | null, isAuthInServer: boolean): SetUserDataActionType => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuthInServer }
})

type SetErrorActonPayloadType = {
	errorMessage: string | undefined,
	errorField: string | undefined
}
type SetErrorActonType = {
	type: typeof SET_ERROR,
	payload: SetErrorActonPayloadType
}
const setError = (errorMessage: string | undefined, errorField: string | undefined): SetErrorActonType => ({
	type: SET_ERROR,
	payload: { errorMessage, errorField }
})

type SetCaptchaUrlActionType = {
	type: typeof SET_CAPTCHA_URL,
	payload: { captchaUrl: string }
}
const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, ActionTypes>

export const authUser = (): ThunkType => async dispatch => {
	const data = await authAPI.authMe()
	if (data.resultCode === 0) {
		let { email, id, login } = data.data
		dispatch(setUserData(email, id, login, true))
	}
	else {
		dispatch(setUserData(null, null, null, false))
	}
}

export const getCaptchaUrl = (): ThunkType => async dispatch => {
	const res = await authAPI.getCaptchaUrl()
	const captchaUrl = res.data.url
	dispatch(setCaptchaUrl(captchaUrl))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
	return async dispatch => {
		dispatch(setError(undefined, undefined))
		const data = await authAPI.login(email, password, rememberMe, captcha)
		if (data.resultCode === 0) {
			dispatch(authUser())
		}
		else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}
			dispatch(setError(data.messages[0], data.fieldsErrors[0].field))
		}
	}
}

export const logout = (): ThunkType => async dispatch => {
	let data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setUserData(null, null, null, false))
	}
}

export default auth