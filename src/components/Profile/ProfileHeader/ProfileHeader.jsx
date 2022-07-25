import AvatarMenu from '../../common/user/AvatarMenu'
import S from './ProfileHeader.styled'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const Wallpapper = () => (
	<S.Wallpapper>
		<img src='https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg' alt='background' />
	</S.Wallpapper>
)

const ProfileHeader = ({ profile, status, updateStatus, isOwner, updateProfilePhoto }) => {
	return (
		<S.Container>
			<Wallpapper />
			<S.Avatar url={profile.photos.large}>
				{isOwner && <AvatarMenu updateProfilePhoto={updateProfilePhoto} />}
			</S.Avatar>
			<S.Description>
				<S.FullName>{profile.fullName}</S.FullName>
				<ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
			</S.Description>
		</S.Container>
	)
}

export default ProfileHeader;