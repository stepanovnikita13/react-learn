import React from 'react'
import _ from 'lodash'

const withField = Component => {
	const WrappedComponent = ({ field, form, error, ...props }) => {
		const getIsError = () => {
			if (error) {
				return _.get(form.errors, field.name) && _.get(form.touched, field.name)
			}
			return false
		}
		return <Component {...field} {...props} isError={getIsError()} />
	}

	WrappedComponent.displayName = `withField(${getDisplayName(Component)})`

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}

	return WrappedComponent
}

export default withField