import { Field, Form, Formik, ErrorMessage } from "formik"
import { useTheme } from "react-jss"
import { NavLink } from "react-router-dom"
import GlobalSvgSelector from "../../../assets/icons/global/globalSvgSelector"
import withField from "../../../hoc/withField"
import { required } from "../../../utilits/validators/validators"
import { Button } from "../../common/form/Buttons/Buttons"
import { Input } from "../../common/form/Input/Input"
import useStyles from "./LoginForm.styled"

const inputWithField = withField(Input)
const LoginForm = ({ login, error, captchaUrl, setIsAuth }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const loginSubmit = async ({ email, password, rememberMe, captcha }, { setSubmitting }) => {
		await login(email, password, rememberMe, captcha, setIsAuth)
		setSubmitting(false);
	}

	const createField = (name, type, placeholder, isError, rest) => {
		return (
			<Field
				component={inputWithField}
				name={name}
				placeholder={placeholder}
				validate={required}
				iconStart={
					<GlobalSvgSelector color={isError && theme.colors.error} type={type} />
				}
				isError={isError}
				{...rest}
			/>
		)
	}
	return (
		<div>
			<h1>Login into<br />your account</h1>
			<Formik
				initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
				onSubmit={loginSubmit}
			>
				{({
					isSubmitting,
					errors,
					touched,
				}) => {
					return (
						<Form>
							<div className={classes.wrapper}>
								<div className={classes.error}>{error.message}</div>
								<div>
									<Field
										component={inputWithField}
										name='email'
										label='Login'
										placeholder='Type Your Email'
										validate={required}
										iconStart={
											<GlobalSvgSelector color={(errors.email && touched.email) ? theme.colors.error : null} type='user' />
										}
										isError={errors.email && touched.email}
										style={{ backgroundColor: theme.colors.backgroundContainer }}
									/>
									<ErrorMessage className='text-error' component={'div'} name='email' />
								</div>
								<div>
									<Field
										component={inputWithField}
										name='password'
										type='password'
										label='Password'
										placeholder='Type Your Password'
										validate={required}
										autoComplete='current-password'
										iconStart={
											<GlobalSvgSelector color={errors.password && touched.password ? theme.colors.error : null} type='password' />
										}
										isError={errors.password && touched.password}
										style={{ backgroundColor: theme.colors.backgroundContainer }}
									/>
									<ErrorMessage className='text-error' component={'div'} name='password' />
								</div>
								<div className={classes.row}>
									<label>
										<Field type="checkbox" name="rememberMe" />Remember me
									</label>
									<a href="/login" className="">Forgot your Password?</a>
								</div>
								{captchaUrl && <>
									<img src={captchaUrl} alt="captcha" />
									<div>
										{createField("captcha", null, "Enter captcha")}
									</div>
								</>
								}
								<Button
									style={{ width: '100%' }}
									type="submit"
									disabled={isSubmitting || !!Object.keys(errors).length}
								>
									Submit
								</Button>
							</div>
						</Form>
					)
				}}
			</Formik>
			Dont have account
			<NavLink to={"/register"} className={classes.registerLink}>Register</NavLink>
			<div className={classes.socialLogin} >
				<p>Or, Sign in with your social account</p>
				<Button className={classes.googleButton}>Sign in with Google</Button>
				<Button className={classes.facebookButton}>Sign in with Facebook</Button>
			</div>
		</div>
	)
}

export default LoginForm