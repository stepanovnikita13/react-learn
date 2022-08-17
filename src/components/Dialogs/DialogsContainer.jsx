import Dialogs from './Dialogs'
import { sendMessage } from '../../redux/dialogs-reducer.ts'
import { connect } from 'react-redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { selectDialogs, selectMessages } from '../../redux/dialogs-selectors'

let mapStateToProps = state => ({
	dialogs: selectDialogs(state),
	messages: selectMessages(state)
})

export default compose(
	connect(mapStateToProps, { sendMessage }),
	withAuthRedirect
)(Dialogs)