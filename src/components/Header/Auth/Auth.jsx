import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../hoc/withAuth';
import { ButtonIconFade } from '../../common/form/Buttons/Buttons';
import S from './Auth.styled';

const Auth = ({ isAuth, login, logout }) => {
	const auth = useContext(AuthContext)
	const handlerClick = () => {
		logout(auth.setIsAuth)
	}
	return (
		<S.Container>
			{isAuth
				? <>
					{login}
					<ButtonIconFade onClick={handlerClick} icon='off' title='Logout' />
				</>
				: <NavLink to={'/login'}>login</NavLink>}
		</S.Container>
	)
}

export default Auth