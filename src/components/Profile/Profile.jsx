import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import Preloader from '../common/Preloader';

const Profile = props => {
	if (!props.profile) {
		return <><Preloader /></>
	}
	return (
		<div className={s.wrapper}>
			<ProfileInfo {...props} />
			{props.isOwner && <MyPostsContainer />}
		</div>
	)
}

export default Profile;