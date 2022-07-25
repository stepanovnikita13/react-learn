import styled from "../../../styledJss"

const S = {}
S.Modal = styled('div')(({ theme }) => ({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: theme.colors.backgroundAroundModal,
	zIndex: theme.zIndex.modal
}))

export default S