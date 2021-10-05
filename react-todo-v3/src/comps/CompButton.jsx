import React from 'react'

function CompButton({children, onClick, onKeyPress}) {
	const btnStyle ={
		backgroundColor : "black",
		color:"white"
	}

	return (
		<button 
			style={btnStyle} onClick={onClick} onKeyPress={onKeyPress}
		>
			{children}
		</button>
		)
}

export default CompButton
