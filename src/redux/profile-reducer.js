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
			let stateCopy = { ...state }; //Делаем копию state т.к. функция не может его менять напрямую
			stateCopy.postsData = [...state.postsData];

			let newPost = {
				id: state.postsData.length,
				text: state.currentPostText,
				likesCount: 0,
			}

			stateCopy.postsData.push(newPost);
			stateCopy.currentPostText = '';

			return stateCopy;
		}

		case UPDATE_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.currentPostText = action.newText;
			return stateCopy;
		}

		default: return state;
	}
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updatePostTextCreator = text => ({ type: UPDATE_POST_TEXT, newText: text })

export default profileReducer;