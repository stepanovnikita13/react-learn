import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from "./AddMessageForm/AddMessageForm"
import useStyles from './Dialogs.styled'
import { useEffect, useRef } from 'react'
import { ErrorBoundary } from '../common/ErrorBoundary'

const Dialogs = (props) => {
	const classes = useStyles()
	let dialogList = props.dialogs.map(d => <DialogItem name={`${d.firstName} ${d.lastName}`} key={d.id} id={d.id} avatar={d.avatar} />)
	let msgList = props.messages.map(m => <Message text={m.text} key={m.id} />).reverse()
	const messagesEndRef = useRef(null)

	useEffect(() => {
		scrollToBottom()
	}, [props.messages]);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: 'end' })
	}

	return (
		<ErrorBoundary>
			<div className={classes.container}>
				<div className={classes.dialogs}>
					{dialogList}
				</div>
				<div className={classes.chat}>
					<div className={classes.chatWrapper}>
						<span className={classes.magicBox} />
						<div className={classes.messagesBlock}>
							<div ref={messagesEndRef} />
							{msgList}
						</div>
					</div>
					<AddMessageForm sendMessage={props.sendMessage} />
				</div>
			</div>
		</ErrorBoundary>
	)
}

export default Dialogs;