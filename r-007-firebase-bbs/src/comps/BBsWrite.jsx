import React from 'react'

function BBsWrite() {
	return (
		<div className="bbs_write">
			<div><input type="text" placeholder="Writer" /></div>
			<div><input type="text" placeholder="Subject" /></div>
			<div><input type="text" placeholder="Content" /></div>
			<div>
				<button>Save</button>
			</div>
		</div>
	)
}

export default BBsWrite
