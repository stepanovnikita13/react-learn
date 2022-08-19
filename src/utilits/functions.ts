import React from "react"

export const scrollTo = (ref: React.RefObject<HTMLElement>, block: ScrollLogicalPosition, behavior: ScrollBehavior = 'smooth') => {
	ref.current?.scrollIntoView({ behavior, block })
}