import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => (
	<div className={s.item + ' ' + s.active}>
		<NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
	</div>
)

const Message = (props) => (
	<div className={s.item}>{props.msg}</div>
)

const Dialogs = () => (
	<div className={s.dialogs}>
		<div className={s.list}>
			<DialogItem name='Nikita' id='1' />
			<DialogItem name='Stas' id='2' />
			<DialogItem name='German' id='3' />
			<DialogItem name='Turbo' id='4' />
			<DialogItem name='Djusha Metelkin' id='5' />
		</div>
		<div className={s.messages}>
			<Message msg='Hi!' />
			<Message msg='How are you?' />
			<Message msg='Go to the bar!' />
		</div>
	</div>
)

export default Dialogs;