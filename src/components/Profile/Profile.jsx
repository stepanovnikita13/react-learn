import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
	<div>
		<ProfileInfo />
		<MyPosts
			postsData={props.profilePage.postsData}
			addPost={props.addPost}
			currentPostText={props.profilePage.currentPostText}
			updateCurrentPostText={props.updateCurrentPostText}
		/>
	</div>
)

export default Profile;