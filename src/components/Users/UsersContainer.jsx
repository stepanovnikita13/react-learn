import React from "react";
import { connect } from "react-redux";
import { toggleFollowProgress, getUsers, follow } from "../../redux/users-reducer";

import Users from "./Users"
import GlobalSvgSelector from "../../assets/icons/global/globalSvgSelector";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <>
			<div className="preloader">
				{this.props.isFetching ? <GlobalSvgSelector type={'preloader'} /> : null}
			</div>
			<Users
				users={this.props.users}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				follow={this.props.follow}
				followInProgressUsers={this.props.followInProgressUsers}
				onPageChanged={this.onPageChanged}
				isAuth={this.props.isAuth}
			/>
		</>
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followInProgressUsers: state.usersPage.followInProgressUsers,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = {
	toggleFollowProgress,
	getUsers,
	follow,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);