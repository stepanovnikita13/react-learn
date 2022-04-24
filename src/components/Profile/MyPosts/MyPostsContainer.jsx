import MyPosts from './MyPosts';
import { addPostCreator, updatePostTextCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
	let addPost = () => {
		props.dispatch(addPostCreator());
	}

	let onPostChange = (text) => {
		props.dispatch(updatePostTextCreator(text));
	}
	return (
		<MyPosts
			updatePostText={onPostChange}
			addPost={addPost}
			postsData={props.postsData}
			currentPostText={props.currentPostText}
		/>
	)
}

export default MyPostsContainer;