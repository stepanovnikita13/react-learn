import s from './Profile.module.css'

const Profile = () => {
	return (
		<div className='content'>
			<div className={s.profileBg}>
				<img src='https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg' alt='background' />
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div className='posts'>
					<div className='item'>
						post1
					</div>
					<div className='item'>
						post 2
					</div>
					<div className='item'>
						post 3
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;