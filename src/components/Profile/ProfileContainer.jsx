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
		const { router, getUserProfile, getStatus } = this.props
		let userId = router.params.userId || 23667
		getUserProfile(userId)
		getStatus(userId)
	}

	render() {
		const { profile, status, updateStatus } = this.props
		return (
			<div>
				<Profile profile={profile} status={status} updateStatus={updateStatus} />
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