import styled from "../../styledJss"

const S = {}
S.Container = styled('div')({
	display: 'flex',
	justifyContent: 'space-around',
	paddingTop: 50
})

S.Picture = styled('div')({
	width: '60%',
	'& img': {
		width: '100%'
	}
})
S.Centered = styled('div')({
	alignSelf: 'center'
})

export default S