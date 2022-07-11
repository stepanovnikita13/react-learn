import { profileAPI } from "../API/api.js"

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PROFILE_PHOTO = 'profile/SET_PROFILE_PHOTO'

let initialState = {
	postsData: [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 1, text: "It's my first post", likesCount: 11 },
		{ id: 2, text: 'Bye!', likesCount: 8 },
	],
	profile: null,
	status: null,
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
			};
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}

		case SET_STATUS: {
			return { ...state, status: action.status }
		}

		case SET_PROFILE_PHOTO: {
			return { ...state, profile: { ...state.profile, photos: { ...action.payload } } }
		}

		default: return state;
	}
}

const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const addPost = text => ({ type: ADD_POST, text })
export const setStatus = status => ({ type: SET_STATUS, status })
export const setProfilePhoto = photos => ({ type: SET_PROFILE_PHOTO, payload: photos })

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

export const updateProfilePhoto = file => async (dispatch) => {
	const data = await profileAPI.updateProfilePhoto(file)
	console.log(data);
	if (data.resultCode === 0) {
		dispatch(setProfilePhoto(data.data))
	}
}

export default profile;