import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'

const Profile = (props) => (
	<div className={s.wrapper}>
		<ProfileInfo profile={props.profile} />
		<MyPostsContainer />
	</div>
)

export default Profile;