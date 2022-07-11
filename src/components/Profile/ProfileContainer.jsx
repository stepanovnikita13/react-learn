import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, updateProfilePhoto } from '../../redux/profile-reducer';
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { selectProfile, selectStatus } from '../../redux/profile-selectors';
import { selectUserId } from '../../redux/auth-selectors';

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.updateProfile()
	}

	componentDidUpdate(prevProps) {
		if (this.props.router.params.userId !== prevProps.router.params.userId) {
			this.updateProfile()
		}
	}

	updateProfile() {
		const { getUserProfile, getStatus, router, authUserId } = this.props
		const userId = router.params.userId || authUserId
		getUserProfile(userId)
		getStatus(userId)
	}

	render() {
		const { profile, status, updateStatus, updateProfilePhoto, router } = this.props
		return (
			<div>
				<Profile
					profile={profile}
					status={status}
					updateStatus={updateStatus}
					isOwner={!router.params.userId}
					updateProfilePhoto={updateProfilePhoto}
				/>
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: selectProfile(state),
	status: selectStatus(state),
	authUserId: selectUserId(state)
})

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, updateProfilePhoto }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)