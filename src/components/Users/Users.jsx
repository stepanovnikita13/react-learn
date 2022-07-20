import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import s from './Users.module.css'

const Users = (props) => {
	let usersList = props.users.map(u => <User
		key={u.id}
		user={u}
		follow={props.follow}
		followInProgressUsers={props.followInProgressUsers}
		isAuth={props.isAuth}
	/>)

	return (
		<div className='content--center'>
			<div className={s.users}>
				<div className={s.list}>
					{usersList}
				</div>
				<Pagination
					currentPage={props.currentPage}
					onPageChanged={props.onPageChanged}
					pageSize={props.pageSize}
					totalUsersCount={props.totalUsersCount}
					viewPages={10}
				/>
			</div>
		</div>
	)
}

export default Users