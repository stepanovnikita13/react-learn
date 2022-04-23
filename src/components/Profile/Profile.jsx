import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
	<div>
		<ProfileInfo />
		<MyPosts
			postsData={props.profilePage.postsData}
			currentPostText={props.profilePage.currentPostText}
			dispatch={props.dispatch}
		/>
	</div>
)

export default Profile;