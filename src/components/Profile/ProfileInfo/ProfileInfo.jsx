import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	if (!props.profile) {
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
				<img src={props.profile.photos.large} alt='' className={s.avatar} />
				<span className={s.fullName}>{props.profile.fullName}</span>
			</div>
		</div>
	)
}

export default ProfileInfo;