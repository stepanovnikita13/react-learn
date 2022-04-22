import s from './../Dialogs.module.css'

const Message = (props) => (
	<div className={s.item}>{props.msg}</div>
)

export default Message;