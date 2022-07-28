import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, updateProfilePhoto, updateProfile } from '../../redux/profile-reducer';
import Profile from './Profile'
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { selectErrors, selectProfile, selectStatus } from '../../redux/profile-selectors';
import { selectUserId } from '../../redux/auth-selectors';
import { useEffect, useCallback, useMemo } from 'react';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const ProfileContainer = props => {
	const { getUserProfile, getStatus, router, authUserId, ...rest } = props

	let userId = useMemo(() => +router.params.userId || authUserId, [router, authUserId])
	const getUserProfileMemo = useCallback((userId) => getUserProfile(userId), [getUserProfile])
	const getStatusMemo = useCallback((userId) => getStatus(userId), [getStatus])

	useEffect(() => {
		if (userId) {
			getUserProfileMemo(userId)
			getStatusMemo(userId)
		}
		return () => {
		}
	}, [getUserProfileMemo, getStatusMemo, userId])

	return (
		<div>
			<Profile
				{...rest}
				isOwner={!router.params.userId}
			/>
		</div>
	)
}

let mapStateToProps = (state) => ({
	profile: selectProfile(state),
	status: selectStatus(state),
	authUserId: selectUserId(state),
	errors: selectErrors(state)
})

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, updateProfilePhoto, updateProfile }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)