import { useTheme } from 'react-jss'
import useStyles from './Pagination.styled'

type Props = {
	totalUsersCount: number,
	pageSize: number,
	currentPage: number,
	viewPagesCount: number,
	handlerClick: (pageNumber: number) => void
}

const Pagination: React.FC<Props> = ({ totalUsersCount, pageSize, currentPage, viewPagesCount, handlerClick }) => {
	const theme: any = useTheme()
	const classes = useStyles({ theme })
	const setPages = (viewPagesCount: number) => {
		let pages: Array<number> = [1]
		let totalPagesCount = Math.ceil(totalUsersCount / pageSize)
		let paginationCount = viewPagesCount - 2
		let minPage = 2

		if (currentPage > totalPagesCount - paginationCount / 2) {
			minPage = totalPagesCount - paginationCount
		} else if (currentPage > viewPagesCount / 2) {
			minPage = currentPage - Math.floor(paginationCount / 2)
		}

		for (let i = minPage; i < minPage + paginationCount; i++) {
			pages.push(i)
		}
		pages.push(totalPagesCount)
		return pages
	}

	let pages = setPages(viewPagesCount)

	return (
		<div className={classes.pagination}>
			{
				pages.map(p => {
					return <span key={p} className={p === currentPage ? classes.selectedPage : ''}
						onClick={() => { handlerClick(p) }}>{p}</span>
				})
			}
		</div>
	)
}

export default Pagination