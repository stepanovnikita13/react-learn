import Dialogs from './Dialogs'
import { sendMessage, updateMessageText } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'

let mapStateToProps = state => ({ dialogsPage: state.dialogsPage }) //Принимает state целиком. Возвращает только нужные нам данные

let mapDispatchToProps = {
	sendMessage, //Возвращает action
	updateMessageText //Возвращает action
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//Первым вызовом принимает данные и создает контейнер.
//Вторым вызовом, передает эти данные в компоненту и возвращает контейнерную компоненту
//Нельзя в нее передавать store

export default DialogsContainer;