import User from "./User/User";
import s from './Users.module.css'

const Users = (props) => {
	let usersList = props.users.map(u => <User key={u.id} user={u} toggleFollow={props.toggleFollow} />)
	//let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = [];

	for (let i = 1; i <= 20; i++) {
		pages.push(i)
	}

	return (
		<div className={s.users}>
			<div className={s.pagination}>
				{
					pages.map(p => {
						return <span className={p === props.currentPage && s.selectedPage}
							onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
					})
				}
			</div>
			<div className={s.list}>
				{usersList}
			</div>
		</div>
	)
}

export default Users