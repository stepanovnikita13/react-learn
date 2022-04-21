import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<div className='content'>
			<div className={s.profileBg}>
				<img src='https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg' alt='background' />
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;