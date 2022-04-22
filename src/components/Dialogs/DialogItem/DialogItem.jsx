import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

const DialogItem = (props) => (
	<div className={s.item + ' ' + s.active}>
		<img src={props.avatar} alt="" />
		<NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
	</div>
)

export default DialogItem;