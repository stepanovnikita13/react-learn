import React from "react";
import * as axios from "axios";
import User from "./User/User";
import s from './Users.module.css'

class Users extends React.Component {
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(res => this.props.setUsers(res.data.items))
	}

	render() {
		let usersList = this.props.users.map(u => <User key={u.id} user={u} toggleFollow={this.props.toggleFollow} />)
		return (
			<div className={s.users}>
				<div className={s.list}>
					{usersList}
				</div>
			</div>
		)
	}
}

export default Users;