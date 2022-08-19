import { authUser } from "./auth-reducer"
import { InferValueTypes, RootThunkType } from "./redux-store"

const initialState = {
	initialized: false
}

const app = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case "app/INITIALIZED_SUCCESS":
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

const actions = {
	initializedSuccess: () => ({ type: 'app/INITIALIZED_SUCCESS' } as const)
}

export const initializeApp = (): ThunkType => async dispatch => {
	await dispatch(authUser())
	dispatch(actions.initializedSuccess())
}

export default app

export type InitialStateType = typeof initialState
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
type ThunkType = RootThunkType<ActionTypes>