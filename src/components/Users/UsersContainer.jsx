import React from "react"
import { connect } from "react-redux"
import { toggleFollowProgress, requestUsers, follow } from "../../redux/users-reducer"
import { selectUsers, selectPageSize, selectTotalUsersCount, selectCurrentPage, selectIsFetching, selectFollowInProgressUsers } from "../../redux/user-selectors"
import { selectIsAuth } from "../../redux/auth-selectors"
import Users from "./Users"
import { ErrorBoundary } from "../../utilits/ErrorBoundary"
import Preloader from "../common/Preloader"

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.requestUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <>
			{this.props.isFetching && <Preloader />}
			<ErrorBoundary>
				<Users
					users={this.props.users}
					isAuth={this.props.isAuth}
					follow={this.props.follow}
					followInProgressUsers={this.props.followInProgressUsers}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
				/>
			</ErrorBoundary>
		</>
	}
}

let mapStateToProps = state => ({
	users: selectUsers(state),
	pageSize: selectPageSize(state),
	totalUsersCount: selectTotalUsersCount(state),
	currentPage: selectCurrentPage(state),
	isFetching: selectIsFetching(state),
	followInProgressUsers: selectFollowInProgressUsers(state),
	isAuth: selectIsAuth(state)
})

let mapDispatchToProps = {
	toggleFollowProgress,
	requestUsers,
	follow,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);