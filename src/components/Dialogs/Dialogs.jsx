import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
	let dialogList = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
	let msgList = props.msgData.map(m => <Message msg={m.msg} />)

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