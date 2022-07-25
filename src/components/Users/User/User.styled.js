import styled from "../../../styledJss"
import { Button } from "../../common/form/Buttons/Buttons"
import { Avatar } from "../../common/user/Avatar"

const S = {}

S.Container = styled('div')(({ theme }) => ({
	width: 170,
	backgroundColor: theme.colors.backgroundContainer,
	borderRadius: theme.sizes.borderRadiusLarge,
	padding: 10
}))

S.Avatar = styled(Avatar)({
	width: '85%',
	height: 'auto',
	margin: [0, 'auto']
})

S.Info = styled('div')({
	paddingTop: 10,
	overflow: 'hidden'
})

S.Button = styled(Button)({
	width: '100%'
})

export default S