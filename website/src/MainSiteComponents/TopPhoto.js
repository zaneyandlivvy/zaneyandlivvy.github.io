

function TopPhoto({index, image, text}) {

	let className = 'text-on-right';
	if (index % 2) {
		className = 'text-on-left';
	}
	return (
		<div className={"top-photo " + className}>
			<img src={image} alt='hello' style={{width: '400px', borderRadius: '15px'}}/>
			<p className='top-photo-text'>{text}</p>
		</div>
	)

}

export default TopPhoto