import logo from '../../logo-s.png'
import AuthContainer from './Auth/AuthContainer';
import { NavLink } from 'react-router-dom';
import styled from '../../styledJss';
import { Button } from '../common/form/Button/Button';
import Container from '../common/global/Container';
import withStyles from 'react-jss';

const S = {}
S.Wrapper = styled('div')(({ theme }) => ({
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	height: theme.sizes.headerHeight,
	padding: [10, 20],
	zIndex: theme.zIndex.header,
	backgroundColor: theme.colors.header
}))

S.Inner = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: '100%'
})

S.Push = styled('div')({
	marginLeft: 'auto'
})

const styles = {
	logoLink: {
		height: 'inherit',
		'& img': {
			height: 'inherit'
		}
	}
}

const Header = ({ classes, toggleTheme, theme }) => {
	const handlerClick = () => {
		toggleTheme()
	}

	return (
		<S.Wrapper>
			<Container>
				<S.Inner>
					<NavLink to='/profile' className={classes.logoLink}>
						<img src={logo} alt="logo" />
					</NavLink>
					<S.Push></S.Push>
					<Button onClick={handlerClick}>Change theme</Button>
					<AuthContainer />
				</S.Inner>
			</Container>
		</S.Wrapper>
	)
}

export default withStyles(styles)(Header);