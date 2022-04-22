import s from './Header.module.css'

const Header = () => (
	<header className={s.header}>
		<div className='container'>
			<img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="logo" />
		</div>
	</header>
)

export default Header;