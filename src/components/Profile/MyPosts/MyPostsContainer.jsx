import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = state => {
	return {
		postsData: state.profile.postsData,
	}
}

let mapDispatchToProps = {
	addPost
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;