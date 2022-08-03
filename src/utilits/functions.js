export const scrollTo = (ref, block) => {
	ref.current?.scrollIntoView({ behavior: "smooth", block })
}