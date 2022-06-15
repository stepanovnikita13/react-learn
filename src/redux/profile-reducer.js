const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

let initialState = {
	postsData: [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 1, text: "It's my first post", likesCount: 11 },
		{ id: 2, text: 'Bye!', likesCount: 8 },
	],

	currentPostText: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.postsData.length,
				text: state.currentPostText,
				likesCount: 0,
			};
			return {      //Делаем копию state и возвращаем её т.к. функция не может его менять напрямую
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

		default: return state;
	}
}

export const addPost = () => ({ type: ADD_POST })
export const updatePostText = text => ({ type: UPDATE_POST_TEXT, newText: text })

export default profileReducer;