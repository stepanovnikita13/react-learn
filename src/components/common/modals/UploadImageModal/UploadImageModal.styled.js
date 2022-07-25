import styled from "../../../../styledJss"

const S = {}

S.Container = styled('div')(({ theme, isDragEnter }) => ({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: 500,
	height: 300,
	backgroundColor: isDragEnter ? theme.colors.backgroundModalLight : theme.colors.backgroundModal,
	borderRadius: theme.sizes.borderRadiusLarge,
	padding: 40
}))

S.Header = styled('div')({
	position: 'absolute',
	top: 10,
	left: 15,
	right: 15,
	display: 'flex',
	flexFlow: 'row nowrap',
	justifyContent: 'space-between'
})

export default S