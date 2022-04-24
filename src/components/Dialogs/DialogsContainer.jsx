import Dialogs from './Dialogs'
import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer'

const DialogsContainer = (props) => {
	let sendMessage = () => {
		props.dispatch(sendMessageCreator())
	}

	let updateMessageText = (text) => {
		props.dispatch(updateMessageTextCreator(text));
	}

	return (
		<Dialogs
			sendMessage={sendMessage}
			updateMessageText={updateMessageText}
			dialogsPage={props.dialogsPage}
		/>
	)
}

export default DialogsContainer;