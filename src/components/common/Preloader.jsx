import GlobalSvgSelector from "../../assets/icons/global/globalSvgSelector"
import styled from "../../styledJss"

const S = {}
S.Preloader = styled('div')(({ theme }) => ({
	position: 'fixed',
	top: '50%',
	right: 0,
	bottom: 0,
	left: '50%',
	width: 110,
	height: 110,
	transform: 'translate(-50%, -50%)',
	zIndex: theme?.zIndex.preloader,
}))
const Preloader = () => (
	<S.Preloader>
		<GlobalSvgSelector type={'preloader'} />
	</S.Preloader>
)

export default Preloader
