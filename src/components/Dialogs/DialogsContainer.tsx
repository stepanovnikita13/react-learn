import Dialogs from './Dialogs'
import { sendMessage } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { selectDialogs, selectMessages } from '../../redux/dialogs-selectors'
import { AppState } from '../../redux/redux-store'
import { DialogsData, MsgDataType } from '../../types/types'

type StateProps = {
	dialogs: Array<DialogsData>
	messages: Array<MsgDataType>
}
type DispatchProps = {
	sendMessage: (message: string) => void
}
export type DialogsProps = StateProps & DispatchProps

let mapStateToProps = (state: AppState): StateProps => ({
	dialogs: selectDialogs(state),
	messages: selectMessages(state)
})

export default compose(
	connect(mapStateToProps, { sendMessage }),
	withAuthRedirect
)(Dialogs)