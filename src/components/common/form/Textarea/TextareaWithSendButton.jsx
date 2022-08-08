import { ButtonIcon } from "../Buttons/Buttons"
import { Textarea } from "./Textarea"
import useStyles from "./TextareaWithSendButton.styled"

export const TextareaWithSendButton = ({ children, disabled, ...props }) => {
	const classes = useStyles()
	return (
		<Textarea {...props}>
			<div className={classes.button}>
				{children ?? <ButtonIcon
					icon='send'
					type='submit'
					disabled={disabled}
				/>}
			</div>
		</Textarea>
	)
}