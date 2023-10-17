import './Slider.css'
import { useEffect, useState } from 'react';

export default function Slider({ imgs }) {
	let [index, setIndex] = useState(0);
	let [name, setName] = useState('show');

	useEffect(_ => {
		setTimeout(() => {
			let prom = new Promise(resolve => {
				setName('hide');
				setTimeout(() => {
					resolve();
				}, 500)
			})
				.then(res => setIndex((i) => i + 1 < imgs.length ? i + 1 : 0))
				.then(res => setName('show'))
		}, 5000);
	}, [index])

	return (
		<div className="slider-container">
			<img className={`gallery-item ${name}`} src={imgs[index]} alt="slider-item" />
		</div>
	)
}
