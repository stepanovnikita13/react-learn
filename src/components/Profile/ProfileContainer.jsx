import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { selectProfile, selectStatus } from '../../redux/profile-selectors';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId || 23667
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return (
			<div>
				<Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: selectProfile(state),
	status: selectStatus(state)
})

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)