import { Navigate } from "react-router-dom"
import LoginForm from "./LoginForm"
import s from "./Login.module.css"

const Login = ({ isAuth, ...props }) => {
	if (isAuth) return <Navigate to="/profile" replace={true} />
	return (
		<div>
			<h1 className={s.heading}>Login into<br />your account</h1>
			<LoginForm {...props} />
		</div>
	)
}

export default Login