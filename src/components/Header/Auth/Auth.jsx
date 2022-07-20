import { NavLink } from 'react-router-dom';

const Auth = props => {
	return (
		<div>
			{props.isAuth
				? <div>{props.login}<button onClick={props.logout}>Logout</button></div>
				: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	)
}

export default Auth