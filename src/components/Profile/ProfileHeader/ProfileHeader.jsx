import Avatar from '../../common/user/Avatar'
import AvatarMenu from '../../common/user/AvatarMenu'
import useStyle from './ProfileHeader.styled'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const Wallpapper = () => {
	const classes = useStyle()
	return (
		<div className={classes.wallpapper}>
			<img src='https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg' alt='background' />
		</div>
	)
}

const ProfileHeader = ({ profile, status, updateStatus, isOwner, updateProfilePhoto }) => {
	const classes = useStyle()
	return (
		<div className={classes.container}>
			<Wallpapper />
			<Avatar className={classes.avatar} url={profile.photos.large}>
				{isOwner && <AvatarMenu updateProfilePhoto={updateProfilePhoto} />}
			</Avatar>
			<div style={{ flex: 1 }}>
				<span className={classes.fullName}>{profile.fullName}</span>
				<ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
			</div>
		</div>
	)
}

export default ProfileHeader;