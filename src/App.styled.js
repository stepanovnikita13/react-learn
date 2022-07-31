import styled from './styledJss'

const S = {}
S.Wrapper = styled('div')({
	display: 'flex',
	flexFlow: 'column',
	justifyContent: 'space-between',
	minHeight: '100vh',
})
S.Main = styled('div')(({ theme }) => ({
	marginTop: theme.sizes.headerHeight,

}))

export default S