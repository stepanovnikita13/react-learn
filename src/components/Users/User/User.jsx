import { NavLink } from 'react-router-dom';
import { Button } from '../../common/form/Button/Button';
import { Avatar } from '../../common/user/Avatar';
import s from './User.module.css'

const User = ({ user, isAuth, followInProgressUsers, follow }) => {
	const onHandleClick = () => {
		follow(isAuth, user.followed, user.id)
	}
	const isDisabled = followInProgressUsers.some(id => id === user.id)

	return (
		<div className={s.item}>
			<NavLink to={'/profile/' + user.id}>
				<Avatar url={user.photos.small} className={s.avatar} />
			</NavLink>
			<div className={s.info}>
				<span>{user.name}</span>
			</div>
			<Button onClick={onHandleClick} className={s.followBtn} disabled={isDisabled} inProgress={isDisabled}>
				{user.followed ? 'unfollow' : 'follow'}
			</Button>
		</div>
	)
}

export default User;