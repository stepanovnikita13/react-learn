import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from "./AddMessageForm/AddMessageForm"
import useStyles from './Dialogs.styled'
import { useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from '../common/ErrorBoundary'
import { scrollTo } from '../../utilits/functions'

const Dialogs = (props) => {
	const { dialogs, messages, sendMessage } = props
	const [scrollBarIsShow, setScrollBarIsShow] = useState(false)
	const classes = useStyles({ scrollBarIsShow })
	let dialogList = dialogs.map(d => <DialogItem name={`${d.firstName} ${d.lastName}`} key={d.id} id={d.id} avatar={d.avatar} />)
	let msgList = messages.map(m => <Message text={m.text} key={m.id} />).reverse()
	const messagesEndRef = useRef(null)

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
		<ErrorBoundary>
			<div className={classes.container}>
				<div className={classes.dialogs}>
					{dialogList}
				</div>
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
			</div>
		</ErrorBoundary>
	)
}

export default Dialogs;