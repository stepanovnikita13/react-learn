import s from './Header.module.css'
import logo from '../../logo-s.png'
import AuthContainer from './Auth/AuthContainer';

const Header = () => (
	<header className={s.header}>
		<div className='container'>
			<div className={s.inner}>
				<img src={logo} alt="logo" />
				<AuthContainer />
			</div>
		</div>
	</header>
)

export default Header;