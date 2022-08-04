import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import useStyles from "./Users.styled";
import useMedia from '../../hooks/useMedia'
import { device } from "../../styles/device";
import { useRef } from "react"
import { scrollTo } from '../../utilits/functions'

const Users = (props) => {
	const { users, follow, followInProgressUsers, isAuth,
		currentPage, onPageChanged, pageSize, totalUsersCount } = props
	const classes = useStyles()
	const topRef = useRef()
	const viewPagesCount = useMedia([device.laptopS, device.tabletS], [10, 8], 7)

	const usersList = users.map(u => <User
		key={u.id}
		user={u}
		follow={follow}
		followInProgressUsers={followInProgressUsers}
		isAuth={isAuth}
		topRef={topRef}
	/>)

	const handlerClick = (value) => {
		onPageChanged(value)
		scrollTo(topRef, 'end', 'auto')
	}

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div ref={topRef} />
				<div className={classes.users}>
					{usersList}
				</div>
				<Pagination
					currentPage={currentPage}
					handlerClick={handlerClick}
					pageSize={pageSize}
					totalUsersCount={totalUsersCount}
					viewPagesCount={viewPagesCount}
				/>
			</div>
		</div>
	)
}

export default Users