import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import S from "./Users.styled";

const Users = (props) => {
	let usersList = props.users.map(u => <User
		key={u.id}
		user={u}
		follow={props.follow}
		followInProgressUsers={props.followInProgressUsers}
		isAuth={props.isAuth}
	/>)

	return (
		<S.Container>
			<S.Wrapper>
				<S.Users>
					{usersList}
				</S.Users>
				<Pagination
					currentPage={props.currentPage}
					onPageChanged={props.onPageChanged}
					pageSize={props.pageSize}
					totalUsersCount={props.totalUsersCount}
					viewPages={10}
				/>
			</S.Wrapper>
		</S.Container>
	)
}

export default Users