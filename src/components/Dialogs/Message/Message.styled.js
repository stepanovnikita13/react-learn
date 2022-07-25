import styled from "../../../styledJss"

const S = {}

S.Message = styled('div')(({ theme }) => ({
	width: 'max-content',
	padding: '6px 18px',
	backgroundColor: theme.colors.backgroundContainer,
	borderRadius: theme.sizes.borderRadius,
}))

export default S