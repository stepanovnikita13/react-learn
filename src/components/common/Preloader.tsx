import GlobalSvgSelector from "../../assets/icons/global/globalSvgSelector"
import { createUseStyles } from 'react-jss'
import { CustomTheme } from "../../styles/themes"

const useStyles = createUseStyles((theme: CustomTheme) => ({
	preloader: {
		position: 'fixed',
		top: '50%',
		right: 0,
		bottom: 0,
		left: '50%',
		width: 110,
		height: 110,
		transform: 'translate(-50%, -50%)',
		zIndex: theme?.zIndex.preloader,
	}
}))

const Preloader = () => {
	const classes = useStyles()
	return (
		<div className={classes.preloader} >
			<GlobalSvgSelector type={'preloader'} />
		</div>
	)
}

export default Preloader
