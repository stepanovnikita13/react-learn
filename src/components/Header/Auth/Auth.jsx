import { NavLink } from 'react-router-dom';
import s from './Auth.module.css'

const Auth = props => {
	return (
		<div className={s.auth}>
			{props.isAuth ? props.login
				: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	)
}

export default Auth