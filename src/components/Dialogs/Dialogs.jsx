import s from './Dialogs.module.css'

const Dialogs = () => (
	<div className={s.dialogs}>
		<div className={s.list}>
			<div className={s.item + ' ' + s.active}>
				Nikita
			</div>
			<div className={s.item}>
				Stas
			</div>
			<div className={s.item}>
				German
			</div>
			<div className={s.item}>
				Turbo
			</div>
			<div className={s.item}>
				Djusha Metelkin
			</div>
		</div>
		<div className={s.messages}>
			<div className={s.item}>Hi</div>
			<div className={s.item}>How are you?</div>
			<div className={s.item}>Go to the bar!</div>
		</div>
	</div>
)

export default Dialogs;