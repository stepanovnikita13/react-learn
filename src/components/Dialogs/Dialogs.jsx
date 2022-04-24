import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
	let dialogList = props.dialogsPage.dialogsData.map(d => <DialogItem name={`${d.firstName} ${d.lastName}`} id={d.id} avatar={d.avatar} />)
	let msgList = props.dialogsPage.msgData.map(m => <Message text={m.text} />)

	let sendMessage = () => {
		props.dispatch(sendMessageCreator())
	}

	let onMessageChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateMessageTextCreator(text));
	}

	return (
		<div className={s.dialogs}>
			<div className={s.list}>
				{dialogList}
			</div>
			<div className={s.chat}>
				{msgList}
				<div className={s.chatInput}>
					<textarea onChange={onMessageChange} value={props.dialogsPage.currentText} className={s.input} />
					<button onClick={sendMessage} className={s.sendBtn}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;