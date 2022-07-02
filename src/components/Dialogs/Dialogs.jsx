import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from "./AddMessageForm/AddMessageForm"

const Dialogs = (props) => {
	let dialogList = props.dialogs.map(d => <DialogItem name={`${d.firstName} ${d.lastName}`} key={d.id} id={d.id} avatar={d.avatar} />)
	let msgList = props.messages.map(m => <Message text={m.text} key={m.id} />)

	return (
		<div className={s.dialogs}>
			<div className={s.list}>
				{dialogList}
			</div>
			<div className={s.chat}>
				{msgList}
				<AddMessageForm sendMessage={props.sendMessage} />
			</div>
		</div>
	)
}

export default Dialogs;