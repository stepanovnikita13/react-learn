import s from './Message.module.css'

const Message = (props) => (
	<div className={s.item}>{props.text}</div>
)

export default Message;