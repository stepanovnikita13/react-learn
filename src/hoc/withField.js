import React from 'react'

const withField = Component => {
	const WrappedComponent = ({ field, form, ...props }) => {
		return <Component {...field} {...props} />
	}

	WrappedComponent.displayName = `withField(${getDisplayName(Component)})`

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}

	return WrappedComponent
}

export default withField