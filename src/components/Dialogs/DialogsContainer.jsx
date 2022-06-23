import Dialogs from './Dialogs'
import { sendMessage, updateMessageText } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = state => ({
	dialogsPage: state.dialogsPage
}) //Принимает state целиком. Возвращает только нужные нам данные

let mapDispatchToProps = {
	sendMessage, //Возвращает action
	updateMessageText //Возвращает action
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)