import { ThunkAction } from "redux-thunk"
import { authUser } from "./auth-reducer"
import { AppState } from "./redux-store"

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

const initialState = {
	initialized: false
}

export type InitialStateType = typeof initialState

const app = (state = initialState, action: ActionTypes): InitialStateType => {
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

type ActionTypes = InitializedSuccessActionType
type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS }
const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, ActionTypes>
export const initializeApp = (): ThunkType => async dispatch => {
	await dispatch(authUser())
	dispatch(initializedSuccess())
}

export default app