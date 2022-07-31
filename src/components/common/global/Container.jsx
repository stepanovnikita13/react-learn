import styled from "../../../styledJss";
import { device } from "../../../styles/device";

const Container = styled('div')(({ theme }) => ({
	width: '100%',
	maxWidth: theme.sizes.maxWidth,
	minWidth: theme.sizes.minWidth,
	padding: [0, 40],
	height: '100%',
	margin: [0, 'auto'],

}))

export default Container