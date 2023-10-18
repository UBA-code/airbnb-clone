import './Slider.css'
import { useState } from 'react';

export default function Slider({ imgs }) {
	let [index, setIndex] = useState(0);

	setTimeout(() => {
				setIndex((i) => i + 1 < imgs.length ? i + 1 : 0)
	}, 5000);
	return (
		<div className="slider-container">
			<div className="gallery-item img" style={{backgroundImage: `url(${imgs[index]})`}}></div>
		</div>
	)
}
