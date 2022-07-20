import { Avatar } from '../../common/user/Avatar'
import AvatarMenu from '../../common/user/AvatarMenu'
import s from './ProfileHeader.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileHeader = ({ profile, status, updateStatus, isOwner, updateProfilePhoto }) => {
	const handleChange = (e) => {
		updateProfilePhoto(e.target.files[0])
	}
	return (
		<div className={s.container}>
			<div className={s.profileWp}>
				<img src='https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg' alt='background' />
			</div>
			<div className={s.descrBlock}>
				<Avatar url={profile.photos.large} className={s.avatar}>
					{isOwner && <AvatarMenu updateProfilePhoto={updateProfilePhoto} />}
				</Avatar>
				<div className={s.descr}>
					<span className={s.fullName}>{profile.fullName}</span>
					<ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} className={s.status} />
					{isOwner && <input type='file' onChange={handleChange} />}
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader;