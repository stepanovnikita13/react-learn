import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => (
	<div>
		<ProfileInfo />
		<MyPostsContainer
			postsData={props.profilePage.postsData}
			currentPostText={props.profilePage.currentPostText}
			dispatch={props.dispatch}
		/>
	</div>
)

export default Profile;