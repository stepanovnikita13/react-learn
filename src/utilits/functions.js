export const scrollTo = (ref, block, behavior = 'smooth') => {
	ref.current?.scrollIntoView({ behavior, block })
}