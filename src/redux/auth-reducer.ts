import { authAPI } from "../API/auth-api";
import { ResutlCodesEnum } from "../API/types";
import { InferValueTypes, RootThunkType } from "./redux-store.js";

const initialState = {
	isAuthInServer: undefined as boolean | undefined,
	userId: null as (number | null),
	email: null as string | null,
	login: null as string | null,
	errorField: undefined as string | undefined,
	errorMessage: undefined as string | undefined,
	captchaUrl: null as string | null,
}

const auth = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case "auth/SET_USER_DATA":
		case "auth/SET_CAPTCHA_URL":
		case "auth/SET_ERROR": return { ...state, ...action.payload }

		default:
			return state;
	}
}

const actions = {
	setUserData: (email: string | null, userId: number | null, login: string | null, isAuthInServer: boolean) => ({
		type: 'auth/SET_USER_DATA',
		payload: { userId, email, login, isAuthInServer }
	} as const),
	setError: (errorMessage: string | undefined, errorField: string | undefined) => ({
		type: 'auth/SET_ERROR',
		payload: { errorMessage, errorField }
	} as const),
	setCaptchaUrl: (captchaUrl: string) => ({ type: 'auth/SET_CAPTCHA_URL', payload: { captchaUrl } } as const),
}

export const authUser = (): ThunkType => async dispatch => {
	const data = await authAPI.authMe()
	if (data.resultCode === ResutlCodesEnum.success) {
		let { email, id, login } = data.data
		dispatch(actions.setUserData(email, id, login, true))
	}
	else {
		dispatch(actions.setUserData(null, null, null, false))
	}
}

export const getCaptchaUrl = (): ThunkType => async dispatch => {
	const res = await authAPI.getCaptchaUrl()
	const captchaUrl = res.data.url
	dispatch(actions.setCaptchaUrl(captchaUrl))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
	return async dispatch => {
		dispatch(actions.setError(undefined, undefined))
		const data = await authAPI.login(email, password, rememberMe, captcha)
		if (data.resultCode === ResutlCodesEnum.success) {
			dispatch(authUser())
		}
		else {
			if (data.resultCode === ResutlCodesEnum.captcha) {
				dispatch(getCaptchaUrl())
			}
			dispatch(actions.setError(data.messages[0], data.fieldsErrors[0].field))
		}
	}
}

export const logout = (): ThunkType => async dispatch => {
	let data = await authAPI.logout()
	if (data.resultCode === ResutlCodesEnum.success) {
		dispatch(actions.setUserData(null, null, null, false))
	}
}

export default auth

export type InitialStateType = typeof initialState
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
type ThunkType = RootThunkType<ActionTypes>