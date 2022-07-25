import styled from "../../styledJss"

const S = {}

S.Container = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '4fr 8fr',
	height: `calc(100vh - ${theme.sizes.headerHeight}px)`,
	padding: 20
}))

S.Dialogs = styled('div')({
	'&>*:not(:last-child)': {
		marginBottom: 10
	}
})

S.Chat = styled('div')({
	rowGap: 15,
	display: 'flex',
	flexFlow: 'column',
	justifyContent: 'flex-end',
	overflow: 'hidden',
})

S.ChatWrapper = styled('div')({
	display: 'flex',
	position: 'relative',
	overflow: 'hidden',
	'&:hover span': {
		opacity: 0
	}
})

S.MessagesBlock = styled('div')(({ theme }) => ({
	display: 'flex',
	width: '100%',
	flexFlow: 'column-reverse nowrap',
	overflow: 'auto',
	'&>*:not(:first-child)': {
		marginBottom: 10
	},
	'&::-webkit-scrollbar': {
		width: 5,
		backgroundColor: theme.colors.scrollbarBackground,
		borderRadius: '5px',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: theme.colors.scrollbar,
		borderRadius: '5px'
	},
	'&::-webkit-scrollbar-track': {
		borderRadius: '5px'
	}
}))

S.MagicBox = styled('span')(({ theme }) => ({
	display: 'block',
	position: 'absolute',
	height: '100%',
	width: 5,
	top: 0,
	right: 0,
	backgroundColor: theme.colors.background,
	transition: 'opacity .1s'
}))

export default S