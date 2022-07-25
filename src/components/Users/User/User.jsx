import { NavLink } from 'react-router-dom';
import S from './User.styled';

const User = ({ user, isAuth, followInProgressUsers, follow }) => {
	const onHandleClick = () => {
		follow(isAuth, user.followed, user.id)
	}
	const isDisabled = followInProgressUsers.some(id => id === user.id)

	return (
		<S.Container>
			<NavLink to={'/profile/' + user.id}>
				<S.Avatar url={user.photos.large} />
			</NavLink>
			<S.Info>
				<span>{user.name}</span>
			</S.Info>
			<S.Button onClick={onHandleClick} disabled={isDisabled} inProgress={isDisabled}>
				{user.followed ? 'unfollow' : 'follow'}
			</S.Button>
		</S.Container>
	)
}

export default User;