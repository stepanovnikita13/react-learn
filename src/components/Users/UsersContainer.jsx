import React from "react"
import { connect } from "react-redux"
import { toggleFollowProgress, requestUsers, follow } from "../../redux/users-reducer"
import { selectUsers, selectPageSize, selectTotalUsersCount, selectCurrentPage, selectIsFetching, selectFollowInProgressUsers } from "../../redux/user-selectors"
import { selectIsAuth } from "../../redux/auth-selectors"
import Users from "./Users"
import GlobalSvgSelector from "../../assets/icons/global/globalSvgSelector"

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.requestUsers(pageNumber, this.props.pageSize)
	}

	pages = currentPage => {
		let pages = [1]
		let totalPagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let totalPaginationCount = 20
		let paginationCount = totalPaginationCount - 2
		let minPage = 2

		if (currentPage > totalPagesCount - paginationCount / 2) {
			minPage = totalPagesCount - paginationCount
		} else if (currentPage > totalPaginationCount / 2) {
			minPage = currentPage - paginationCount / 2
		}

		for (let i = minPage; i < minPage + paginationCount; i++) {
			pages.push(i)
		}
		pages.push(totalPagesCount)
		return pages
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
				pages={this.pages}
			/>
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