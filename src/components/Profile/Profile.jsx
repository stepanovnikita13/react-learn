import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => (
	<div>
		<ProfileInfo />
		<MyPostsContainer />
	</div>
)

export default Profile;