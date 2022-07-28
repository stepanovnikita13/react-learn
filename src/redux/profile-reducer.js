import { profileAPI } from "../API/api.js"
import _ from 'lodash'

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PROFILE_PHOTO = 'profile/SET_PROFILE_PHOTO'
const SET_ERRORS = 'SET_ERRORS'

let initialState = {
	postsData: [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 1, text: "It's my first post", likesCount: 11 },
		{ id: 2, text: 'Bye!', likesCount: 8 },
	],
	profile: null,
	status: null,
	errors: null,
}

const profile = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.postsData.length,
				text: action.text,
				likesCount: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				currentPostText: ''
			}
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}

		case SET_STATUS: {
			return { ...state, status: action.status }
		}

		case SET_PROFILE_PHOTO: {
			return { ...state, profile: { ...state.profile, ...action.payload } }
		}

		case SET_ERRORS: {
			return { ...state, ...action.payload }
		}

		default: return state;
	}
}

export const addPost = text => ({ type: ADD_POST, text })
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
const setStatus = status => ({ type: SET_STATUS, status })
const setProfilePhoto = photos => ({ type: SET_PROFILE_PHOTO, payload: { photos } })
const setErrors = errors => ({ type: SET_ERRORS, payload: { errors } })

export const getUserProfile = userId => async dispatch => {
	const data = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(data))
}

export const getStatus = userId => async dispatch => {
	const data = await profileAPI.getStatus(userId)
	dispatch(setStatus(data))
}

export const updateStatus = status => async dispatch => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const updateProfilePhoto = file => async dispatch => {
	const data = await profileAPI.updateProfilePhoto(file)
	if (data.resultCode === 0) {
		dispatch(setProfilePhoto(data.data))
	} else {
		console.log(data)
		console.log(file)
	}
}

export const updateProfile = profile => async (dispatch, getState) => {
	const userId = getState().auth.userId
	try {
		const data = await profileAPI.updateProfile(profile)
		if (data.resultCode === 0) {
			dispatch(setErrors(null))
			dispatch(getUserProfile(userId))
		} else if (data.resultCode === 1) {
			dispatch(setErrors(getObjectFromErrors(data.messages)))
			return getObjectFromErrors(data.messages)
		}
	} catch (error) {
		console.log(`${error.name} : ${error.message}`)
	}
}

function getObjectFromErrors(array) {
	const errors = {}
	array.forEach(value => {
		const splitted = value.split(' (')
		const message = splitted[0]
		const key = splitted[1].toLowerCase().split(')')[0].split('->').join('.')
		_.set(errors, key, message)
	})
	return errors
}

export default profile