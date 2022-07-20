import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, updateProfilePhoto, updateProfile } from '../../redux/profile-reducer';
import Profile from './Profile'
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { selectProfile, selectStatus } from '../../redux/profile-selectors';
import { selectUserId } from '../../redux/auth-selectors';
import { useEffect, useCallback, useMemo } from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const ProfileContainer = props => {
	const { getUserProfile, getStatus, router, authUserId, profile,
		status, updateStatus, updateProfilePhoto, updateProfile } = props

	let userId = useMemo(() => +router.params.userId || authUserId, [router, authUserId])
	const getUserProfileMemo = useCallback((userId) => getUserProfile(userId), [getUserProfile])
	const getStatusMemo = useCallback((userId) => getStatus(userId), [getStatus])

	useEffect(() => {
		getUserProfileMemo(userId)
		getStatusMemo(userId)
		return () => {
		}
	}, [getUserProfileMemo, getStatusMemo, userId])

	return (
		<div>
			<Profile
				profile={profile}
				status={status}
				updateStatus={updateStatus}
				isOwner={!router.params.userId}
				updateProfilePhoto={updateProfilePhoto}
				updateProfile={updateProfile}
			/>
		</div>
	)
}

let mapStateToProps = (state) => ({
	profile: selectProfile(state),
	status: selectStatus(state),
	authUserId: selectUserId(state)
})

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, updateProfilePhoto, updateProfile }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)