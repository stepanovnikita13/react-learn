import MyPosts from './MyPosts';
import { addPostCreator, updatePostTextCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = state => {
	return {
		postsData: state.profilePage.postsData,
		currentPostText: state.profilePage.currentPostText
	}
}

let mapDispatchToProps = dispatch => {
	return {
		addPost: () => dispatch(addPostCreator()),

		updatePostText: text => dispatch(updatePostTextCreator(text)),
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;