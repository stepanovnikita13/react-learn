import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../API/api';
import s from './User.module.css'

const User = (props) => {
	let toggleFollow = () => {
		if (!props.user.followed) {
			usersAPI.followUser(props.user.id).then(data => {
				if (data.resultCode === 0) {
					props.toggleFollow(props.user.id);
				}
			})
		}
		else {
			usersAPI.unfollowUser(props.user.id).then(data => {
				if (data.resultCode === 0) {
					props.toggleFollow(props.user.id);
				}
			})
		}
	}

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
				<button onClick={toggleFollow} className={s.followBtn}>
					{props.user.followed ? 'unfollow' : 'follow'}
				</button>
			</div>
		</div>
	)
}

export default User;