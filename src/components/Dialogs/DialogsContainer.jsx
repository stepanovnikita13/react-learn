import Dialogs from './Dialogs'
import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'

let mapStateToProps = state => ({ dialogsPage: state.dialogsPage }) //Принимает state целиком. Возвращает только нужные данные

let mapDispatchToProps = dispatch => { //Возвращает колбеки
	return {
		sendMessage: () => dispatch(sendMessageCreator()), //Возвращает action
		updateMessageText: text => dispatch(updateMessageTextCreator(text)), //Возвращает action
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//Первым вызовом принимает данные и создает контейнер.
//Вторым вызовом, передает эти данные в компоненту и возвращает контейнерную компоненту
//Нельзя в нее передавать store

export default DialogsContainer;