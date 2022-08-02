import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import useStyles from './Profile.styled';

const Profile = props => {
	const classes = useStyles()
	const { profile, status, updateStatus, updateProfilePhoto,
		updateProfile, isOwner, errors } = props
	if (!profile) {
		return <Preloader />
	}
	return (
		<div className={classes.wrapper}>
			<ProfileHeader profile={profile}
				status={status}
				updateStatus={updateStatus}
				isOwner={isOwner}
				updateProfilePhoto={updateProfilePhoto}
			/>
			<ProfileInfo profile={profile}
				isOwner={isOwner}
				updateProfile={updateProfile}
				errors={errors}
			/>
			<MyPostsContainer isOwner={isOwner} profilePhoto={profile.photos.small} />
		</div>
	)
}

export default Profile;