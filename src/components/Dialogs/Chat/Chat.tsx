import { useEffect, useRef, useState } from "react"
import { scrollTo } from "../../../utilits/functions"
import AddMessageForm from "../AddMessageForm/AddMessageForm"
import Message from "./Message/Message"
import useStyles from './Chat.styled'
import { MsgDataType } from "../../../types/types"

type Props = {
	messages: Array<MsgDataType>
	sendMessage: (message: string) => void
}
export type StyleProps = { scrollBarIsShow: boolean }
const Chat: React.FC<Props> = (props) => {
	const { messages, sendMessage } = props
	const [scrollBarIsShow, setScrollBarIsShow] = useState(false)
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const classes = useStyles({ scrollBarIsShow })
	let msgList = messages.map(m => <Message text={m.text} key={m.id} />).reverse()

	useEffect(() => {
		const isScroll = messagesEndRef.current?.parentElement?.scrollTop! > -200
		if (isScroll) scrollTo(messagesEndRef, 'end')
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