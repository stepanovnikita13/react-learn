import React from "react";
import * as axios from "axios";
import User from "./User/User";
import s from './Users.module.css'

class Users extends React.Component {
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
		let usersList = this.props.users.map(u => <User key={u.id} user={u} toggleFollow={this.props.toggleFollow} />)
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = [];

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return (
			<div className={s.users}>
				<div className={s.pagination}>
					{
						pages.map(p => {
							return <span className={p === this.props.currentPage && s.selectedPage}
								onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
						})
					}
				</div>
				<div className={s.list}>
					{usersList}
				</div>
			</div>
		)
	}
}

export default Users;