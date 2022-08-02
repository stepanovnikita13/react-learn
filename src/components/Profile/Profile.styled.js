import styled from '../../styledJss'

const S = {}
S.Wrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flexFlow: 'row wrap',
	paddingTop: 10,
	margin: [0, -10, 0, -10],
	'&>div': {
		padding: 15,
		backgroundColor: theme.colors.backgroundContainer,
		borderRadius: theme.sizes.borderRadiusLarge,
		margin: 10,
	}
}))

export default S