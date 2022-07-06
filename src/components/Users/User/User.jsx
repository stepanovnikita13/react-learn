import { NavLink } from 'react-router-dom';
import { Avatar } from '../../common/user/avatar';
import s from './User.module.css'

const User = ({ user, isAuth, followInProgressUsers, follow }) => {
	const onHandleClick = () => {
		follow(isAuth, user.followed, user.id)
	}

	const isDisabled = followInProgressUsers.some(id => id === user.id)


	return (
		<div className={s.item}>
			<NavLink to={'/profile/' + user.id}>
				<Avatar url={user.photos.small} />
			</NavLink>
			<div className={s.info}>
				<span>{user.name}</span>
			</div>
			<button onClick={onHandleClick} className={s.followBtn} disabled={isDisabled}>
				{user.followed ? 'unfollow' : 'follow'}
			</button>
		</div>
	)
}

export default User;