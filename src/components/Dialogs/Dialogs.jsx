import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
	let dialogList = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />)
	let msgList = props.state.msgData.map(m => <Message msg={m.msg} />)

	let newMessageElement = React.useRef();

	let sendMessage = () => {
		let text = newMessageElement.current.value;

		alert(text);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.list}>
				{dialogList}
			</div>
			<div className={s.chat}>
				{msgList}
				<div className={s.chatInput}>
					<textarea ref={newMessageElement} className={s.input}></textarea>
					<button onClick={sendMessage} className={s.sendBtn}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;