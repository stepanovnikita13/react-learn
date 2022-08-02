import { Navigate } from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"
import backgroundUrl from '../../assets/images/login-background.png'
import useStyles from "./Login.styled"

const Login = ({ isAuth, userId, ...props }) => {
	const classes = useStyles()

	if (isAuth) return <Navigate to="/profile" replace={true} />
	return (
		<div className={classes.container} >
			<div className={classes.picture} >
				<img src={backgroundUrl} alt="social-nerwork" />
			</div>
			<div className={classes.centered}>
				<LoginForm {...props} />
			</div>
		</div>
	)
}

export default Login