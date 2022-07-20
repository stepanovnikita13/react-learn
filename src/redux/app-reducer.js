import { authUser } from "./auth-reducer.js";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const TOGGLE_THEME = 'app/SET_THEME'

let initialState = {
	initialized: false,
	theme: 'light'
}

const app = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}

		case TOGGLE_THEME:
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light'
			}
		default:
			return state;
	}
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })
export const toggleTheme = () => ({ type: TOGGLE_THEME })

export const initializeApp = () => async dispatch => {
	await dispatch(authUser())
	dispatch(initializedSuccess())
}

export default app