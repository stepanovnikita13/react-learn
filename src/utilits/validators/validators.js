export const required = value => {
	return (!value || !value.trim().length > 0) ? "This field is required!" : false
}

export const notNull = value => {
	return (!value || !value.trim().length > 0) ? "This field is empty!" : false
}

export const maxLength = maxLength => value => {
	return (value && value.length > maxLength) ? `Max length is ${maxLength} symbols` : false
}