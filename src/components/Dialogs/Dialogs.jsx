import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from "./AddMessageForm/AddMessageForm"
import S from './Dialogs.styled'
import { useEffect, useRef } from 'react'

const Dialogs = (props) => {
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
		<S.Container>
			<S.Dialogs>
				{dialogList}
			</S.Dialogs>
			<S.Chat>
				<S.ChatWrapper>
					<S.MagicBox />
					<S.MessagesBlock>
						<div ref={messagesEndRef} />
						{msgList}
					</S.MessagesBlock>
				</S.ChatWrapper>
				<AddMessageForm sendMessage={props.sendMessage} />
			</S.Chat>
		</S.Container>
	)
}

export default Dialogs;