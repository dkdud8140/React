const view = (probs) =>{
	return (
		<div>
			<h1>{probs.b_name}</h1>
			<p>{probs.bbs.b_date}</p>
			<p>{probs.bbs.b_time}</p>
			<p>{probs.bbs.b_writer}</p>
			<p>{probs.bbs.b_subject}</p>
			<p>{probs.bbs.b_content}</p>
		</div>	
	)
}

export default view;