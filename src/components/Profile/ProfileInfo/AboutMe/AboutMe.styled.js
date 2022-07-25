import styled from "../../../../styledJss"

const S = {}

S.AboutList = styled('ul')({
	'&>li:not(:last-child)': {
		marginBottom: 10
	}
})

S.ContactList = styled('ul')({
	display: 'flex',
	flexFlow: 'row wrap',
	rowGap: 5,
	columnGap: 5,
	padding: [5, 0]
})

export default S