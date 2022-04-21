import s from './ProfileInfo.module.css'

const ProfileInfo = (prors) => (
	<div>
		<div className={s.profileWp}>
			<img src='https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg' alt='background' />
		</div>
		<div className={s.descrBlock}>
			ava + description
		</div>
	</div>
)

export default ProfileInfo;