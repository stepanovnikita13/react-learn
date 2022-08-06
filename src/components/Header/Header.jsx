import logo from '../../logo-s.png'
import AuthContainer from './Auth/AuthContainer';
import { ThemeSwitcher } from '../common/form/Buttons/Buttons';
//import S from './Header.styled';
import withRouter from '../../hoc/withRouter';
import { useTheme } from 'react-jss';
import useStyles from './Header.styled';
import { NavLink } from 'react-router-dom';

const Header = ({ setTheme, currentTheme, isAuth, ...props }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const handlerClick = () => {
		const value = currentTheme === 'light' ? 'dark' : 'light'
		setTheme(value)
	}

	return (
		<div className={classes.wrapper}>
			<div className='container'>
				<div className={classes.inner}>
					<NavLink className={classes.logoLink} to='/profile'>
						<img src={logo} alt="logo" />
					</NavLink>
					<div style={{ marginLeft: 'auto' }}></div>
					<ThemeSwitcher onClick={handlerClick} currentTheme={currentTheme} title='Switch color scheme' />
					<AuthContainer isAuth={isAuth} path={props.router.location.pathname} />
				</div>
			</div>
		</div>
	)
}

export default withRouter(Header)