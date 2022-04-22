import s from './Message.module.css'

const Message = (props) => (
	<div className={s.item}>{props.msg}</div>
)

export default Message;