import MyPosts from './MyPosts';
import { addPost, updatePostText } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = state => {
	return {
		postsData: state.profilePage.postsData,
		currentPostText: state.profilePage.currentPostText
	}
}

let mapDispatchToProps = {
	addPost,
	updatePostText
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;