import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/state'

const Dialogs = (props) => {
	let dialogList = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />)
	let msgList = props.dialogsPage.msgData.map(m => <Message text={m.text} />)
	let newMessageElement = React.useRef();

	let sendMessage = () => {
		props.dispatch(sendMessageActionCreator())
	}

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.dispatch(updateMessageTextActionCreator(text));
	}

	return (
		<div className={s.dialogs}>
			<div className={s.list}>
				{dialogList}
			</div>
			<div className={s.chat}>
				{msgList}
				<div className={s.chatInput}>
					<textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.currentText} className={s.input} />
					<button onClick={sendMessage} className={s.sendBtn}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;