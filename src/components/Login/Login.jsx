import { Navigate } from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"
import backgroundUrl from '../../assets/images/login-background.png'
import S from "./Login.styled"

const Login = ({ isAuth, ...props }) => {
	if (isAuth) return <Navigate to="/profile" replace={true} />
	return (
		<S.Container>
			<S.Picture>
				<img src={backgroundUrl} alt="social-nerwork" />
			</S.Picture>
			<S.Centered>
				<LoginForm {...props} />
			</S.Centered>
		</S.Container>
	)
}

export default Login