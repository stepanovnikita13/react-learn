import s from './Header.module.css'
import logo from '../../logo-s.png'

const Header = () => (
	<header className={s.header}>
		<div className='container'>
			<img src={logo} alt="logo" />
		</div>
	</header>
)

export default Header;