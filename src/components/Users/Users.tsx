import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import useStyles from "./Users.styled";
import useMedia from '../../hooks/useMedia'
import { device } from "../../styles/device";
import { scrollTo } from '../../utilits/functions'
import { UserType } from '../../types/types'
import { useEffect } from "react";

type Props = {
	users: Array<UserType>,
	followInProgressUsers: Array<number>,
	isAuth: boolean | undefined,
	currentPage: number,
	pageSize: number,
	totalUsersCount: number,
	topRef: React.RefObject<HTMLDivElement>,
	follow: (isAuth: boolean, isFollowed: boolean, userId: number) => void,
	onPageChanged: (pageNumber: number) => void,
}

const Users: React.FC<Props> = props => {
	const { users, follow, followInProgressUsers, isAuth,
		currentPage, onPageChanged, pageSize, totalUsersCount, topRef } = props
	const classes = useStyles()
	const viewPagesCount = useMedia([device.laptopS, device.tabletS], [10, 8], 7)

	const usersList = users.map(u => <User
		key={u.id}
		user={u}
		follow={follow}
		followInProgressUsers={followInProgressUsers}
		isAuth={isAuth}
		topRef={topRef}
	/>)

	const handlerClick = (pageNumber: number) => {
		scrollTo(topRef, 'start', 'auto')
		onPageChanged(pageNumber)
	}

	useEffect(() => {
		document.title = 'Users'
	}, [])

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.users}>
					{usersList}
				</div>
				{totalUsersCount > 0 && <Pagination
					currentPage={currentPage}
					handlerClick={handlerClick}
					pageSize={pageSize}
					totalUsersCount={totalUsersCount}
					viewPagesCount={viewPagesCount}
				/>}

			</div>
		</div>
	)
}

export default Users