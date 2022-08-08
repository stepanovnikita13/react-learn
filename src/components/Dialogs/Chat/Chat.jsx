import { useEffect, useRef, useState } from "react"
import { scrollTo } from "../../../utilits/functions"
import AddMessageForm from "../AddMessageForm/AddMessageForm"
import Message from "./Message/Message"
import useStyles from './Chat.styled'

const Chat = (props) => {
	const { messages, sendMessage } = props
	const [scrollBarIsShow, setScrollBarIsShow] = useState(false)
	const messagesEndRef = useRef(null)
	const classes = useStyles({ scrollBarIsShow })
	let msgList = messages.map(m => <Message text={m.text} key={m.id} />).reverse()
	useEffect(() => {
		scrollTo(messagesEndRef, 'end')
	}, [messages]);

	function showScroll() {
		setScrollBarIsShow(true)
	}

	function hideScroll() {
		setScrollBarIsShow(false)
	}
	return (
		<div className={classes.chat}>
			<div
				className={classes.chatWrapper}
				onTouchMove={showScroll}
				onTouchEnd={hideScroll}
				onMouseEnter={showScroll}
				onMouseLeave={hideScroll}
			>
				<span className={classes.magicBox} />
				<div className={classes.messagesBlock}>
					<div ref={messagesEndRef} />
					{msgList}
				</div>
			</div>
			<AddMessageForm sendMessage={sendMessage} />
		</div>
	)
}

export default Chat