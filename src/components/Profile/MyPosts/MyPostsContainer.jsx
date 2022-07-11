import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = state => {
	return {
		postsData: state.profile.postsData,
	}
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer;