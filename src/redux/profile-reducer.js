const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.postsData.length,
				text: state.currentPostText,
				likesCount: 0,
			}

			state.postsData.push(newPost);
			state.currentPostText = '';

			break;

		case UPDATE_POST_TEXT:
			state.currentPostText = action.newText;
			break;

		default:
			break;
	}

	return state;
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updatePostTextCreator = text => ({ type: UPDATE_POST_TEXT, newText: text })

export default profileReducer;