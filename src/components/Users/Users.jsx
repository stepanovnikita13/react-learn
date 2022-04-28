import * as axios from "axios";
import User from "./User/User";
import s from './Users.module.css'

const Users = (props) => {
	if (props.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
			console.log(res.data.items);
			props.setUsers(res.data.items)
		})
	}

	let usersList = props.users.map(u => <User key={u.id} user={u} toggleFollow={props.toggleFollow} />)
	return (
		<div className={s.users}>
			<div className={s.list}>
				{usersList}
			</div>
		</div>
	)
}

export default Users;