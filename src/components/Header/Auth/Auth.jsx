import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../hoc/withAuth';
import { ButtonIconFade } from '../../common/form/Buttons/Buttons';
import useStyles from './Auth.styled'

const Auth = ({ isAuth, userId, login, logout, path }) => {
	const classes = useStyles()
	const auth = useContext(AuthContext)
	const link = path === '/login' ? 'register' : 'login'
	const handlerClick = () => {
		logout(auth.setIsAuth)
	}
	return (
		<div className={classes.container} >
			{isAuth
				? <>
					{login}
					<ButtonIconFade onClick={handlerClick} icon='off' title='Logout' />
				</>
				: <NavLink to={`/${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</NavLink>}
		</div>
	)
}

export default Auth