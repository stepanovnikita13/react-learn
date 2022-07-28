import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import S from './Profile.styled';

const Profile = props => {
	const { profile, status, updateStatus, updateProfilePhoto,
		updateProfile, isOwner, errors } = props
	if (!profile) {
		return <Preloader />
	}
	return (
		<S.Wrapper>
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
		</S.Wrapper>
	)
}

export default Profile;