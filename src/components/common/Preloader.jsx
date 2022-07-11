import GlobalSvgSelector from "../../assets/icons/global/globalSvgSelector"
import s from './Preloader.module.css'

const Preloader = () => (
	<div className={s.preloader}>
		<GlobalSvgSelector type={'preloader'} />
	</div>
)

export default Preloader
