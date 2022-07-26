import styled from "../../styledJss"

const S = {}

S.Container = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	padding: 20
})

S.Wrapper = styled('div')({
	display: 'flex',
	flexFlow: 'column'
})

S.Users = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '15px 15px'
})

export default S