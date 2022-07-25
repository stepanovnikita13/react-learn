import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import S from './Profile.styled';

const Profile = props => {
	if (!props.profile) {
		return <><Preloader /></>
	}
	return (
		<S.Wrapper>
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
			<MyPostsContainer isOwner={props.isOwner} profilePhoto={props.profile.photos.small} />
		</S.Wrapper>
	)
}

export default Profile;