import React from "react";

type Props = {
	[key: string]: any
}
type State = {
	hasError: boolean
}
export class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}
	render() {
		if (this.state.hasError) {
			return (
				<div>Oops...Something went wrong</div>
			)
		}
		return (
			this.props.children
		)
	}
}