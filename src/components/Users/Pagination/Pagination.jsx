import { useTheme } from 'react-jss'
import useStyles from './Pagination.styled'

const Pagination = ({ totalUsersCount, pageSize, currentPage, viewPagesCount, handlerClick }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const setPages = viewPagesCount => {
		let pages = [1]
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