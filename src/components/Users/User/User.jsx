import { useTheme } from 'react-jss';
import { NavLink } from 'react-router-dom';
import useMedia from '../../../hooks/useMedia';
import { device } from '../../../styles/device';
import { scrollTo } from '../../../utilits/functions';
import { ButtonIcon } from '../../common/form/Buttons/Buttons';
import Avatar from '../../common/user/Avatar';
import useStyles from './User.styled';

const User = ({ user, isAuth, followInProgressUsers, follow, topRef }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const isMobile = useMedia([device.tabletS], [false], true)

	const handlerClick = () => {
		follow(isAuth, user.followed, user.id)
	}
	const isDisabled = followInProgressUsers.some(id => id === user.id)
	return (
		<div className={classes.container}>
			<NavLink onClick={() => scrollTo(topRef, 'start', 'auto')} className={classes.avatar} to={'/profile/' + user.id}>
				<Avatar url={user.photos.large} />
			</NavLink>
			<div className={classes.info}>
				<span>{user.name}</span>
			</div>
			<div style={!isMobile ? { display: 'flex', alignItems: 'center', columnGap: 7 } : {}}>
				<ButtonIcon
					icon={user.followed ? 'check' : 'user-plus'}
					onClick={handlerClick}
					disabled={isDisabled}
					title={user.followed ? 'unfollow' : 'folow'}
					color={isDisabled ? theme.colors.iconFade : user.followed ? theme.colors.success : theme.colors.primary}
					className={classes.button}
				/>
				{!isMobile && <span>{user.followed ? 'you followed' : 'follow'}</span>}
			</div>
		</div>
	)
}

export default User;