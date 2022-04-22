import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => (
	<div className={s.item + ' ' + s.active}>
		<NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
	</div>
)

const Message = (props) => (
	<div className={s.item}>{props.msg}</div>
)

const Dialogs = (props) => {

	let dialogsData = [
		{ id: 1, name: 'Nikita' },
		{ id: 2, name: 'Stas' },
		{ id: 3, name: 'German' },
		{ id: 4, name: 'Turbo' },
		{ id: 5, name: 'Djusha Metelkin' },
	]

	let msgData = [
		{ id: 1, msg: 'Hi!' },
		{ id: 1, msg: 'How are you?' },
		{ id: 1, msg: 'Go to the bar!' },
	]

	let dialogList = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
	let msgList = msgData.map(m => <Message msg={m.msg} />)

	return (
		<div className={s.dialogs}>
			<div className={s.list}>
				{dialogList}
			</div>
			<div className={s.messages}>
				{msgList}
			</div>
		</div>
	)
}

export default Dialogs;