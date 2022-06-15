import React from "react";
import { connect } from "react-redux";
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC } from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users"

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

class UsersContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(res => this.props.setUsers(res.data.items))
	}

	render() {
		return <Users
			users={this.props.users}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			toggleFollow={this.props.toggleFollow}
			onPageChanged={this.onPageChanged}
		/>
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);