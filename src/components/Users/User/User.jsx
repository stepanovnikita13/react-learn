import { NavLink } from 'react-router-dom';
import s from './User.module.css'

const User = (props) => {
	return (
		<div className={s.item}>
			<NavLink to={'/profile/' + props.user.id}>
				<img src={props.user.photos.small ?? "https://i.ibb.co/WkhWRyT/1024px-User-avatar-svg.png"} alt="" className={props.user.avatar ? '' : s.default} />
			</NavLink>
			<div className={s.info}>
				<ul>
					<li>
						<span>{props.user.name}</span>
					</li>
					<li>
						<span>{'user.city'}</span>
					</li>
					<li>
						<span>{'props.user.status'}</span>
					</li>
				</ul>
			</div>
			<div className={s.btnWrap}>
				<button onClick={() => { props.follow(props.isAuth, props.user.followed, props.user.id) }} className={s.followBtn} disabled={props.followInProgressUsers.some(id => id === props.user.id)}>
					{props.user.followed ? 'unfollow' : 'follow'}
				</button>
			</div>
		</div>
	)
}

export default User;