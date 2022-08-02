import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import useStyles from "./Users.styled";

const Users = (props) => {
	const classes = useStyles()
	let usersList = props.users.map(u => <User
		key={u.id}
		user={u}
		follow={props.follow}
		followInProgressUsers={props.followInProgressUsers}
		isAuth={props.isAuth}
	/>)

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.users}>
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