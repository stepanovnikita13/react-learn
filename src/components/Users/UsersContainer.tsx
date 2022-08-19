import React from "react"
import { connect } from "react-redux"
import { requestUsers, follow } from "../../redux/users-reducer"
import { selectUsers, selectPageSize, selectTotalUsersCount, selectCurrentPage, selectIsFetching, selectFollowInProgressUsers } from "../../redux/user-selectors"
import { selectIsAuthInServer } from "../../redux/auth-selectors"
import Users from "./Users"
import { ErrorBoundary } from "../common/ErrorBoundary"
import Preloader from "../common/Preloader"
import { useEffect } from "react"
import { UserType } from "../../types/types"
import { AppState } from "../../redux/redux-store"

type OwnProps = {
	topRef: React.RefObject<HTMLDivElement>,
}
type DispatchProps = {
	follow: (isAuth: boolean, isFollowed: boolean, userId: number) => void,
	requestUsers: (currentPage: number, pageSize: number) => void,
}
type StateProps = {
	users: Array<UserType>,
	pageSize: number,
	totalUsersCount: number,
	currentPage: number,
	isFetching: boolean,
	followInProgressUsers: Array<number>,
	isAuth: boolean | undefined,
}
type Props = OwnProps & DispatchProps & StateProps

const UsersContainer: React.FC<Props> = (props) => {
	const { requestUsers, currentPage, pageSize } = props
	const onPageChanged = (pageNumber: number) => {
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
				topRef={props.topRef}
			/>
		</ErrorBoundary>
	</>
}

let mapStateToProps = (state: AppState): StateProps => ({
	users: selectUsers(state),
	pageSize: selectPageSize(state),
	totalUsersCount: selectTotalUsersCount(state),
	currentPage: selectCurrentPage(state),
	isFetching: selectIsFetching(state),
	followInProgressUsers: selectFollowInProgressUsers(state),
	isAuth: selectIsAuthInServer(state)
})

let mapDispatchToProps = {
	requestUsers,
	follow,
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(UsersContainer)