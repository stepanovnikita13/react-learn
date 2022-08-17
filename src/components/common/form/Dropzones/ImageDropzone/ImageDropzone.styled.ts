import { createUseStyles } from 'react-jss'
import { CustomTheme } from '../../../../../styles/themes'

type ImageDropzoneRuleNames = 'wrapper' | 'border' | 'content' | 'icon'
	| 'link' | 'notice' | '@keyframes border-animation-spin'
type ImageDropzoneProps = { isActive: boolean }

const useStyles = createUseStyles<ImageDropzoneRuleNames, ImageDropzoneProps, CustomTheme>((theme) => ({
	wrapper: {
		position: 'relative',
		width: 400,
		height: 220,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	border: ({ isActive }) => ({
		position: 'absolute',
		width: !isActive ? 'calc(100% - 20px)' : 'calc(100% - 27px)',
		height: !isActive ? 'calc(100% - 20px)' : 'calc(100% - 27px)',
		backgroundImage: [
			`linear-gradient(90deg, ${theme.colors.borderDropZone} 50%, transparent 50%)`,
			`linear-gradient(90deg, ${theme.colors.borderDropZone} 50%, transparent 50%)`,
			`linear-gradient(0deg, ${theme.colors.borderDropZone} 50%, transparent 50%)`,
			`linear-gradient(0deg, ${theme.colors.borderDropZone} 50%, transparent 50%)`
		],
		backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
		backgroundSize: '18px 2px, 18px 2px, 2px 18px, 2px 18px',
		backgroundPosition: '0px 0px, 126px 100%, 0px 126px, 100% 0px',
		animation: isActive && '4s linear infinite $border-animation-spin',
		transition: 'width .15s linear, height .15s linear',
	}),
	'@keyframes border-animation-spin': {
		from: {
			backgroundPosition: '0px 0px, 126px 100%, 0px 126px, 100% 0px'
		},
		to: {
			backgroundPosition: '126px 0px, 0px 100%, 0px 0px, 100% 126px'
		}
	},
	content: {
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		textAlign: 'center',
		fontSize: '1.2em',
	},
	icon: {
		width: 80,
		height: 80,
		'&>*': {
			stroke: theme.colors.borderDropZone,
		}
	},
	link: {
		display: 'block',
		fontFamily: 'OpenSans-Bold',
		color: 'var(--primary)',
		cursor: 'pointer',
	},
	notice: {
		color: theme.colors.borderDropZone,
		fontFamily: 'OpenSans-Italic',
		fontSize: '.8em',
	}
}))

export default useStyles