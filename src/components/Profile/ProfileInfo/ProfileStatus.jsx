import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onClick={this.activateEditMode}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input autoFocus='true' type="text" value={this.props.status} onBlur={this.deactivateEditMode} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus