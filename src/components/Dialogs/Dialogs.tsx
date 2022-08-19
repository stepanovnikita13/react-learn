import DialogItem from './DialogItem/DialogItem'
import useStyles from './Dialogs.styled'
import { ErrorBoundary } from '../common/ErrorBoundary'
import Chat from './Chat/Chat'
import { useState } from 'react'
import { ButtonIcon } from '../common/form/Buttons/Buttons'
import useMedia from '../../hooks/useMedia'
import { device } from '../../styles/device'
import { DialogsProps } from './DialogsContainer'

export type StyleProps = { isHide: boolean }

const Dialogs: React.FC<DialogsProps> = (props) => {
	const { dialogs, messages, sendMessage } = props
	const [isHide, setIsHide] = useState(false)
	const classes = useStyles({ isHide })
	const isMobile = useMedia([device.tabletS], [false], true)

	const dialogList = dialogs.map(d => {
		return (
			<DialogItem
				key={d.id}
				id={d.id}
				name={`${d.firstName} ${d.lastName}`}
				avatar={d.avatar}
				onClick={() => isMobile && setIsHide(true)}
			/>
		)
	})

	return (
		<ErrorBoundary>
			<div className={classes.container}>
				{isMobile && <ButtonIcon className={classes.button} onClick={() => setIsHide(false)} icon='message' />}
				<div className={classes.dialogs}>
					{dialogList}
				</div>
				<Chat messages={messages} sendMessage={sendMessage} />
			</div>
		</ErrorBoundary>
	)
}

export default Dialogs;