import Avatar from '../../common/user/Avatar'
import AvatarMenu from '../../common/user/AvatarMenu'
import useStyle from './ProfileHeader.styled'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import { defaultWallpapper } from '../../../assets/images/globalImgSelector'

const Wallpapper = ({ url }) => {
	const classes = useStyle()
	return (
		<div className={classes.wallpapper}>
			<img src={url ?? defaultWallpapper} alt='background' />
		</div>
	)
}

const ProfileHeader = ({ profile, status, updateStatus, isOwner, updateProfilePhoto }) => {
	const classes = useStyle()
	return (
		<div className={classes.container}>
			<Wallpapper url={profile.photos.large} />
			<Avatar className={classes.avatar} url={profile.photos.large}>
				{isOwner && <AvatarMenu updateProfilePhoto={updateProfilePhoto} />}
			</Avatar>
			<div className={classes.content}>
				<span className={classes.fullName}>{profile.fullName}</span>
				<ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
			</div>
		</div>
	)
}

export default ProfileHeader;