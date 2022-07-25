import styled from "../../../styledJss"

const S = {}

S.Container = styled('div')({
	display: 'flex',
	alignItems: 'center',
	columnGap: 10,
	'& img': {
		width: 50,
		height: 50,
		objectFit: 'cover',
		borderRadius: '50%'
	}
})

export default S