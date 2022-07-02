export const required = value => {
	return !value ? "Field is required!" : false
}

export const maxLength = maxLength => value => {
	return (value && value.length > maxLength) ? `Max length is ${maxLength} symbols` : false
}