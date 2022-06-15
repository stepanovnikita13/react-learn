import { connect } from "react-redux";
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

let mapDispatchToProps = dispatch => {
	return {
		toggleFollow: userId => dispatch(toggleFollowAC(userId)),
		setUsers: users => dispatch(setUsersAC(users)),
		setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
		setTotalUsersCount: totalCount => dispatch(setTotalUsersCountAC(totalCount)),
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;