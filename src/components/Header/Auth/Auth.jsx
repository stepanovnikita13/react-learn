import { NavLink } from 'react-router-dom';
import { ButtonIconFade } from '../../common/form/Buttons/Buttons';
import S from './Auth.styled';

const Auth = props => {
	return (
		<S.Container>
			{props.isAuth
				? <>
					{props.login}
					<ButtonIconFade onClick={props.logout} icon='off' title='Logout' />
				</>
				: <NavLink to={'/login'}>login</NavLink>}
		</S.Container>
	)
}

export default Auth