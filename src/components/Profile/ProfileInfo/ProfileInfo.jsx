import { Avatar } from '../../common/user/Avatar'
import AvatarMenu from '../../common/user/AvatarMenu'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, updateProfilePhoto }) => {
	return (
		<div className={s.profileInfo}>
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
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;