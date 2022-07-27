import logo from '../../logo-s.png'
import AuthContainer from './Auth/AuthContainer';
import { ThemeSwitcher } from '../common/form/Buttons/Buttons';
import Container from '../common/global/Container';
import S from './Header.styled';

const Header = ({ setTheme, theme, isAuth }) => {
	const handlerClick = () => {
		const value = theme === 'light' ? 'dark' : 'light'
		setTheme(value)
	}

	return (
		<S.Wrapper>
			<Container>
				<S.Inner>
					<S.LogoLink to='/profile'>
						<img src={logo} alt="logo" />
					</S.LogoLink>
					<S.Push></S.Push>
					<ThemeSwitcher onClick={handlerClick} theme={theme} title='Switch color scheme' />
					<AuthContainer isAuth={isAuth} />
				</S.Inner>
			</Container>
		</S.Wrapper>
	)
}

export default Header