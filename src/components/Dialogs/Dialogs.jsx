import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
	let dialogList = props.dialogsPage.dialogsData.map(d => <DialogItem name={`${d.firstName} ${d.lastName}`} key={d.id} id={d.id} avatar={d.avatar} />)
	let msgList = props.dialogsPage.msgData.map(m => <Message text={m.text} key={m.id} />)

	let sendMessage = () => {
		props.sendMessage()
	}

	let updateMessageText = (e) => {
		let text = e.target.value;
		props.updateMessageText(text)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.list}>
				{dialogList}
			</div>
			<div className={s.chat}>
				{msgList}
				<div className={s.chatInput}>
					<textarea onChange={updateMessageText} value={props.dialogsPage.currentText} className={s.input} />
					<button onClick={sendMessage} className={s.sendBtn}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;