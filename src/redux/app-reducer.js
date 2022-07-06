import { authUser } from "./auth-reducer.js";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
	initialized: false
}

const app = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}

		default:
			return state;
	}
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => async dispatch => {
	await dispatch(authUser())
	dispatch(initializedSuccess())
}

export default app