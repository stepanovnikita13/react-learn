import styled from '../../../styledJss'
import { Avatar } from '../../common/user/Avatar'

const div = styled('div')
const S = {}
S.Container = div({
	flex: [1, 1, '100%'],
	display: 'flex',
	flexFlow: 'row wrap'
})

S.Wallpapper = div(({ theme }) => ({
	flex: [1, 1, '100%'],
	'&>img': {
		width: '100%',
		height: 200,
		objectFit: 'cover',
		borderRadius: theme.sizes.borderRadiusLarge
	}
}))

S.Avatar = styled(Avatar)(({ theme }) => ({
	width: 180,
	marginLeft: 25,
	marginBottom: '-80px',
	transform: 'translateY(-80px)',
	'&&': {
		border: {
			width: 8,
			style: 'solid',
			color: theme.colors.backgroundContainer
		}
	}
}))

S.Description = div({
	flex: 1
})

S.FullName = styled('span')({
	fontSize: 1.2,
	fontWeight: 'bold',
	display: 'inline-block',
	padding: 10
})



export default S