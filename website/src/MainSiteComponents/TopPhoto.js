

function TopPhoto({image, text}) {


	return (
		<div className="top-photo">
			<img src={image} alt='hello' style={{width: '600px', borderRadius: '15px'}}/>
			<p>{text}</p>
		</div>
	)

}

export default TopPhoto