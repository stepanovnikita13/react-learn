import { NavLink } from 'react-router-dom';
import GlobalSvgSelector from '../../assets/icons/global/globalSvgSelector';
import s from './Navbar.module.css'

const Navbar = () => (
	<nav className={`${s.sidebar} sidebar`} >
		<ul>
			<li className={s.item}>
				<NavLink
					to='/profile'
					className={({ isActive }) => isActive ? s.active : ''}
				>
					<GlobalSvgSelector type="home" />
					Profile
				</NavLink>
			</li>
			<li className={s.item}>
				<NavLink
					to='/dialogs'
					className={({ isActive }) => isActive ? s.active : ''}
				>
					<GlobalSvgSelector type="message" />
					Messages
				</NavLink>
			</li>
			<li className={s.item}>
				<NavLink
					to='/users'
					className={navData => navData.isActive ? s.active : ''}
				>
					<GlobalSvgSelector type="two-user" />
					Users
				</NavLink>
			</li>
			<li className={s.item}>
				<NavLink
					to='/settings'
					className={({ isActive }) => isActive ? s.active : ''}
				>
					<GlobalSvgSelector type="setting" />
					Settings
				</NavLink>
			</li>
		</ul>
	</nav >
)

export default Navbar;