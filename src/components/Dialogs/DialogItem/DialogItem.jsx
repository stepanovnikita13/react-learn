import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => (
	<div className={s.item + ' ' + s.active}>
		<NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
	</div>
)

export default DialogItem;