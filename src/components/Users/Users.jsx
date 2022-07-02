import User from "./User/User";
import s from './Users.module.css'

const Users = (props) => {
	let usersList = props.users.map(u => <User key={u.id} user={u} follow={props.follow} followInProgressUsers={props.followInProgressUsers} isAuth={props.isAuth} />)

	return (
		<div className={s.users}>
			<div className={s.list}>
				{usersList}
			</div>
			<div className={s.pagination}>
				{
					props.pages(props.currentPage).map(p => {
						return <span key={p} className={p === props.currentPage ? s.selectedPage : ''}
							onClick={() => { props.onPageChanged(p) }}>{p}</span>
					})
				}
			</div>

		</div>
	)
}

export default Users