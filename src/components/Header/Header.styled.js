import styled from '../../styledJss'
import { NavLink } from 'react-router-dom'

const S = {}
S.Wrapper = styled('div')(({ theme }) => ({
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	height: theme.sizes.headerHeight,
	padding: [10, 20],
	zIndex: theme.zIndex.header,
	backgroundColor: theme.colors.header
}))

S.Inner = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	columnGap: 15,
	height: '100%'
})

S.Push = styled('div')({
	marginLeft: 'auto'
})

S.LogoLink = styled(NavLink)({
	height: 'inherit',
	'& img': {
		height: 'inherit'
	}
})

export default S