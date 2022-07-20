import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import Preloader from '../common/Preloader';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
	if (!props.profile) {
		return <><Preloader /></>
	}
	return (
		<div className={s.wrapper}>
			<ProfileHeader profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				isOwner={props.isOwner}
				updateProfilePhoto={props.updateProfilePhoto}
			/>
			<ProfileInfo profile={props.profile}
				isOwner={props.isOwner}
				updateProfile={props.updateProfile}
			/>
			{props.isOwner && <MyPostsContainer />}
		</div>
	)
}

export default Profile;