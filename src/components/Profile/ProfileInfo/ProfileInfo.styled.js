import styled from "../../../styledJss"

const S = {}

S.Container = styled('div')({
	flex: [1, 1, '280px']
})

S.Heading = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start'
})

export default S