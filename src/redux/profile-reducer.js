import { usersAPI } from "../API/api.js"

const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
	postsData: [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 1, text: "It's my first post", likesCount: 11 },
		{ id: 2, text: 'Bye!', likesCount: 8 },
	],
	currentPostText: '',
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.postsData.length,
				text: state.currentPostText,
				likesCount: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				currentPostText: ''
			};
		}

		case UPDATE_POST_TEXT: {
			return {
				...state,
				currentPostText: action.newText
			};
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}

		default: return state;
	}
}

const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const addPost = () => ({ type: ADD_POST })
export const updatePostText = text => ({ type: UPDATE_POST_TEXT, newText: text })

export const getUserProfile = userId => {
	return dispatch => {
		usersAPI.getProfile(userId).then(data => {
			dispatch(setUserProfile(data))
		})
	}
}

export default profileReducer;