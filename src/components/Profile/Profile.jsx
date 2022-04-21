import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => (
	<div>
		<ProfileInfo />
		<MyPosts />
	</div>
)

export default Profile;