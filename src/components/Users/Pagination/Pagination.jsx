import s from './Pagination.module.css'

const Pagination = ({ totalUsersCount, pageSize, currentPage, viewPages, onPageChanged }) => {
	const setPages = totalPaginationCount => {
		let pages = [1]
		let totalPagesCount = Math.ceil(totalUsersCount / pageSize)
		let paginationCount = totalPaginationCount - 2
		let minPage = 2

		if (currentPage > totalPagesCount - paginationCount / 2) {
			minPage = totalPagesCount - paginationCount
		} else if (currentPage > totalPaginationCount / 2) {
			minPage = currentPage - paginationCount / 2
		}

		for (let i = minPage; i < minPage + paginationCount; i++) {
			pages.push(i)
		}
		pages.push(totalPagesCount)
		return pages
	}

	let pages = setPages(viewPages)

	return (
		<div className={s.pagination}>
			{
				pages.map(p => {
					return <span key={p} className={p === currentPage ? s.selectedPage : ''}
						onClick={() => { onPageChanged(p) }}>{p}</span>
				})
			}
		</div>
	)
}

export default Pagination