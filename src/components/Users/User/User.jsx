import s from './User.module.css'

const User = (props) => {
	let toggleFollow = () => {
		console.log(props.user.followed)
		props.toggleFollow(props.user.id);
	}

	return (
		<div className={s.item}>
			<img src={props.user.avatar ?? "https://i.ibb.co/WkhWRyT/1024px-User-avatar-svg.png"} alt="" className={props.user.avatar ? '' : s.default} />
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