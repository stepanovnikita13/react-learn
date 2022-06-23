import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile'
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId || 2
		this.props.getUserProfile(userId)
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

function withRouter(Component) {
	const ComponentWithRouter = props => {
		let params = useParams()
		return <Component {...props} router={{ params }} />
	}

	return ComponentWithRouter
}

export default compose(
	connect(mapStateToProps, { getUserProfile }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)