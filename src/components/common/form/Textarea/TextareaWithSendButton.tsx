import { ReactNode } from "react"
import { ButtonIcon } from "../Buttons/Buttons"
import { Textarea } from "./Textarea"
import useStyles from "./TextareaWithSendButton.styled"

type Props = {
	children: ReactNode,
	disabled?: boolean,
	[key: string]: any
}

export const TextareaWithSendButton: React.FC<Props> = ({ children, disabled, ...props }) => {
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