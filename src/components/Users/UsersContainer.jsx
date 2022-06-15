import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFollow, toggleIsFetching } from "../../redux/users-reducer";
import * as axios from "axios";

import Users from "./Users"
import GlobalSvgSelector from "../../assets/icons/global/globalSvgSelector";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(res.data.items)
			})
	}

	render() {
		return <>
			<div className="preloader">
				{this.props.isFetching ? <GlobalSvgSelector id={'preloader'} /> : null}
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