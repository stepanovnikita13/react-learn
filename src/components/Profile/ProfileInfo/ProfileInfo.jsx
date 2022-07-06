import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'
import { Avatar } from '../../common/user/avatar'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return (
			<i>
				<div className='preloader'>
					<GlobalSvgSelector type='preloader' />
				</div>
			</i>
		)
	}
	return (
		<div className={s.profileInfo}>
			<div className={s.profileWp}>
				<img src='https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg' alt='background' />
			</div>
			<div className={s.descrBlock}>
				<Avatar url={profile.photos.small} className={s.avatar} />
				<div className={s.descr}>
					<span className={s.fullName}>{profile.fullName}</span>
					<ProfileStatus status={status} updateStatus={updateStatus} />
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;