import styled from '../../styledJss'

const S = {}
S.Sidebar = styled('nav')(({ theme }) => ({
	position: 'fixed',
	boxShadow: '3px 3px 7px 0px rgb(0 0 0 / 20%)',
	zIndex: theme.zIndex.navbar,
	padding: 13,
	backgroundColor: theme.colors.sidebar,
	borderTopRightRadius: theme.sizes.borderRadiusLarge,
	borderBottomRightRadius: theme.sizes.borderRadiusLarge,
	marginTop: 40,
	height: 'min-content',
	fontSize: 1.2,
	transition: 'width .2s ease',
	overflow: 'hidden',
	width: 50,
	'&.active': {
		width: theme.sizes.navbarWidth
	}
}))

S.Item = styled('li')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	height: '1.5em',
	'& a.active': {
		color: theme.colors.primary
	}
}))
export default S