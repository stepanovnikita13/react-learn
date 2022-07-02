import { profileAPI } from "../API/api.js"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
	postsData: [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 1, text: "It's my first post", likesCount: 11 },
		{ id: 2, text: 'Bye!', likesCount: 8 },
	],
	profile: null,
	status: null
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

		default: return state;
	}
}

const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const addPost = text => ({ type: ADD_POST, text })
export const setStatus = status => ({ type: SET_STATUS, status })

export const getUserProfile = userId => dispatch => {
	profileAPI.getProfile(userId).then(data => {
		dispatch(setUserProfile(data))
	})
}

export const getStatus = userId => dispatch => {
	profileAPI.getStatus(userId).then(data => {
		dispatch(setStatus(data))
	})
}

export const updateStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setStatus(status))
		}

	})
}

export default profile;