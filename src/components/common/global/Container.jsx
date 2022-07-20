import styled from "../../../styledJss";

const Container = styled('div')(({ theme }) => ({
	width: '90%',
	maxWidth: theme.sizes.maxWidth,
	minWidth: theme.sizes.minWidth,
	height: '100%',
	margin: [0, 'auto']
}))

export default Container
