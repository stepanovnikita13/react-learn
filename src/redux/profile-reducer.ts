import { profileAPI } from "../API/api.js"
import _ from 'lodash'
import { PhotosType, PostsDataType, ProfileType } from "../types/types.js"
import { ThunkAction } from "redux-thunk"
import { AppState } from "./redux-store.js"

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PROFILE_PHOTO = 'profile/SET_PROFILE_PHOTO'
const SET_ERRORS = 'SET_ERRORS'

type Errors = {
	[index: string]: string
}

let initialState = {
	postsData: [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 1, text: "It's my first post", likesCount: 11 },
		{ id: 2, text: 'Bye!', likesCount: 8 },
	] as Array<PostsDataType>,
	profile: null as ProfileType | null,
	status: '' as string,
	errors: null as Errors | null,
}

export type InitialStateType = typeof initialState

const profile = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
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
		case SET_USER_PROFILE: return { ...state, ...action.payload }
		case SET_STATUS: return { ...state, ...action.payload }
		case SET_PROFILE_PHOTO: return { ...state, profile: { ...state.profile, photos: action.payload.photos } as ProfileType }
		case SET_ERRORS: return { ...state, ...action.payload }

		default: return state;
	}
}

type ActionTypes = AddPostActionType | SetUserProfileActionType | SetStatusActionType |
	SetProfilePhotoActionType | SetErrorsActionType

type AddPostActionType = { type: typeof ADD_POST, payload: { text: string } }
export const addPost = (text: string): AddPostActionType => ({ type: ADD_POST, payload: { text } })

type SetUserProfileActionType = { type: typeof SET_USER_PROFILE, payload: { profile: ProfileType } }
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, payload: { profile } })

type SetStatusActionType = { type: typeof SET_STATUS, payload: { status: string } }
const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, payload: { status } })

type SetProfilePhotoActionType = { type: typeof SET_PROFILE_PHOTO, payload: { photos: PhotosType } }
const setProfilePhoto = (photos: PhotosType): SetProfilePhotoActionType => ({ type: SET_PROFILE_PHOTO, payload: { photos } })

type SetErrorsActionType = { type: typeof SET_ERRORS, payload: { errors: Errors | null } }
const setErrors = (errors: Errors | null): SetErrorsActionType => ({ type: SET_ERRORS, payload: { errors } })

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, ActionTypes>

export const getUserProfile = (userId: number | null): ThunkType => async dispatch => {
	const data = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async dispatch => {
	const data = await profileAPI.getStatus(userId)
	dispatch(setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async dispatch => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const updateProfilePhoto = (file: any): ThunkType => async dispatch => {
	const data = await profileAPI.updateProfilePhoto(file)
	if (data.resultCode === 0) {
		dispatch(setProfilePhoto(data.data))
	} else {
		console.log(data)
		console.log(file)
	}
}

export const updateProfile = (profile: ProfileType): ThunkAction<Promise<any>, AppState, unknown, ActionTypes> => async (dispatch, getState) => {
	const userId = getState().auth.userId
	try {
		const data = await profileAPI.updateProfile(profile)
		if (data.resultCode === 0) {
			dispatch(setErrors(null))
			if (userId !== 0) {
				dispatch(getUserProfile(userId))
			} else {
				throw new Error("userId can't be null")
			}
		} else if (data.resultCode === 1) {
			dispatch(setErrors(getObjectFromErrors(data.messages)))
			return getObjectFromErrors(data.messages)
		}
	} catch (error) {
		console.log(`${(error as Error).name} : ${(error as Error).message}`)
	}
}

function getObjectFromErrors(array: Array<string>) {
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