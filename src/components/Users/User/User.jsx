import { useTheme } from 'react-jss';
import { NavLink } from 'react-router-dom';
import { Button } from '../../common/form/Buttons/Buttons';
import Avatar from '../../common/user/Avatar';
import useStyles from './User.styled';

const User = ({ user, isAuth, followInProgressUsers, follow }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const onHandleClick = () => {
		follow(isAuth, user.followed, user.id)
	}
	const isDisabled = followInProgressUsers.some(id => id === user.id)

	return (
		<div className={classes.container}>
			<NavLink to={'/profile/' + user.id}>
				<Avatar className={classes.avatar} url={user.photos.large} />
			</NavLink>
			<div className={classes.info}>
				<span>{user.name}</span>
			</div>
			<Button style={{ width: '100%' }} onClick={onHandleClick} disabled={isDisabled}>
				{user.followed ? 'unfollow' : 'follow'}
			</Button>
		</div>
	)
}

export default User;