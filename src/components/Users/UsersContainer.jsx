import React from "react"
import { connect } from "react-redux"
import { toggleFollowProgress, requestUsers, follow } from "../../redux/users-reducer"
import { selectUsers, selectPageSize, selectTotalUsersCount, selectCurrentPage, selectIsFetching, selectFollowInProgressUsers } from "../../redux/user-selectors"
import { selectIsAuthInServer } from "../../redux/auth-selectors"
import Users from "./Users"
import { ErrorBoundary } from "../common/ErrorBoundary"
import Preloader from "../common/Preloader"
import { useEffect } from "react"

const UsersContainer = (props) => {
	const { requestUsers, currentPage, pageSize, topRef } = props
	const onPageChanged = pageNumber => {
		requestUsers(pageNumber, pageSize)
	}

	useEffect(() => {
		requestUsers(currentPage, pageSize)
	}, [requestUsers, currentPage, pageSize])

	return <>
		{props.isFetching && <Preloader />}
		<ErrorBoundary>
			<Users
				users={props.users}
				isAuth={props.isAuth}
				follow={props.follow}
				followInProgressUsers={props.followInProgressUsers}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={props.totalUsersCount}
				pageSize={pageSize}
				topRef={topRef}
			/>
		</ErrorBoundary>
	</>
}

let mapStateToProps = state => ({
	users: selectUsers(state),
	pageSize: selectPageSize(state),
	totalUsersCount: selectTotalUsersCount(state),
	currentPage: selectCurrentPage(state),
	isFetching: selectIsFetching(state),
	followInProgressUsers: selectFollowInProgressUsers(state),
	isAuth: selectIsAuthInServer(state)
})

let mapDispatchToProps = {
	toggleFollowProgress,
	requestUsers,
	follow,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);