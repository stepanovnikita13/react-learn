import React from 'react';
import { connect } from 'react-redux';
import * as axios from "axios";
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId || 2
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(res => {
				this.props.setUserProfile(res.data)
			})
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
	profile: state.profilePage.profile
})

function withRouter(Component) {
	const ComponentWithRouter = props => {
		let location = useLocation()
		let navigate = useNavigate()
		let params = useParams()
		return <Component {...props} router={{ location, navigate, params }} />
	}

	return ComponentWithRouter
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));