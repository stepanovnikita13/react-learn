import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFollow, toggleIsFetching } from "../../redux/users-reducer";

import Users from "./Users"
import GlobalSvgSelector from "../../assets/icons/global/globalSvgSelector";
import { usersAPI } from "../../API/api";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
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
				toggleFollow={this.props.toggleFollow}
				onPageChanged={this.onPageChanged}
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
		isFetching: state.usersPage.isFetching
	}
}

let mapDispatchToProps = {
	toggleFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);