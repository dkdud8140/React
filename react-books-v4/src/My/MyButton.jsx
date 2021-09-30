import React from 'react'

function MyButton({onClick, children}) {

	const myStyle = {
		padding: "1rem",
		outline: "none",
		backgroundColor: "darkslategrey",
		color: "whitesmoke",
		border: "none",
		borderRadius: "3px",
		margin: "15px",
		cursor: "pointer",
	}
	return (
		<button style={myStyle}onClick={onClick}>
			{children}
		</button>
	)
}

export default MyButton
