import { NavLink } from 'react-router-dom';
import s from './Auth.module.css'

const Auth = props => {
	return (
		<div className={s.auth}>
			{props.isAuth
				? <div>{props.login}<button onClick={props.logout}>Logout</button></div>
				: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	)
}

export default Auth