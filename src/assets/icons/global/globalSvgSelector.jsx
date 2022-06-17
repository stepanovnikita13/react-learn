import React from "react"

const GlobalSvgSelector = (props) => {
	switch (props.type) {
		case 'preloader': {
			return (
				<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="110px" height="110px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					<circle cx="50" cy="50" fill="none" stroke="#6667ab" strokeWidth="2" r="44" strokeDasharray="207.34511513692632 71.11503837897544">
						<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
					</circle>
				</svg>
			)
		}

		default:
			return null
	}
}

export default GlobalSvgSelector