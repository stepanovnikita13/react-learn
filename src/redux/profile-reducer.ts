import { profileAPI } from "../API/profile-api"
import _ from 'lodash'
import { PhotosType, PostsDataType, ProfileType } from "../types/types.js"
import { InferValueTypes, RootThunkType } from "./redux-store.js"

let initialState = {
	postsData: [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 1, text: "It's my first post", likesCount: 11 },
		{ id: 2, text: 'Bye!', likesCount: 8 },
	] as Array<PostsDataType>,
	profile: null as ProfileType | null,
	status: '' as string,
	errors: {} as Errors,
}

const profile = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case "profile/ADD_POST": {
			let newPost = {
				id: state.postsData.length,
				likesCount: 0,
				...action.payload
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
			}
		}
		case "profile/SET_USER_PROFILE": return { ...state, ...action.payload }
		case "profile/SET_STATUS": return { ...state, ...action.payload }
		case "profile/SET_PROFILE_PHOTO": return { ...state, profile: { ...state.profile, photos: action.payload.photos } as ProfileType }
		case "profile/SET_ERRORS": return { ...state, ...action.payload }

		default: return state;
	}
}

const actions = {
	addPost: (text: string) => ({ type: 'profile/ADD_POST', payload: { text } } as const),
	setUserProfile: (profile: ProfileType) => ({ type: 'profile/SET_USER_PROFILE', payload: { profile } } as const),
	setStatus: (status: string) => ({ type: 'profile/SET_STATUS', payload: { status } } as const),
	setProfilePhoto: (photos: PhotosType) => ({ type: 'profile/SET_PROFILE_PHOTO', payload: { photos } } as const),
	setErrors: (errors: Errors) => ({ type: 'profile/SET_ERRORS', payload: { errors } } as const),
}

export const addPost = actions.addPost
export const getUserProfile = (userId: number | null): ThunkType => async dispatch => {
	if (userId) {
		const data = await profileAPI.getProfile(userId)
		dispatch(actions.setUserProfile(data))
	}
}

export const getStatus = (userId: number): ThunkType => async dispatch => {
	const data = await profileAPI.getStatus(userId)
	dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async dispatch => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(actions.setStatus(status))
	}
}

export const updateProfilePhoto = (file: FormData): ThunkType => async dispatch => {
	const data = await profileAPI.updateProfilePhoto(file)
	if (data.resultCode === 0) {
		dispatch(actions.setProfilePhoto(data.data.photos))
	} else {
		console.log(data)
		console.log(file)
	}
}

export const updateProfile = (profile: ProfileType): RootThunkType<ActionTypes, Promise<Errors | void>> => async (dispatch, getState) => {
	const userId = getState().auth.userId
	try {
		const data = await profileAPI.updateProfile(profile)
		if (data.resultCode === 0) {
			dispatch(actions.setErrors({}))
			if (userId !== null) {
				dispatch(getUserProfile(userId))
			} else {
				throw new Error("userId can't be null")
			}
		} else if (data.resultCode === 1) {
			dispatch(actions.setErrors(getObjectFromErrors(data.messages)))
			return getObjectFromErrors(data.messages)
		}
	} catch (error) {
		console.log(`${(error as Error).name} : ${(error as Error).message}`)
	}
}

function getObjectFromErrors(array: Array<string>): Errors {
	const errors = {}
	array.forEach((value: string) => {
		const splitted = value.split(' (')
		const message = splitted[0]
		const key = splitted[1].toLowerCase().split(')')[0].split('->').join('.')
		_.set(errors, key, message)
	})
	return errors
}

export default profile

export type InitialStateType = typeof initialState
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
type ThunkType = RootThunkType<ActionTypes>
type Errors = {
	[index: string]: string
}