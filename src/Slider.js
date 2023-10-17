import './Slider.css'
import { useEffect, useState } from 'react';

export default function Slider({ imgs }) {
	console.log("rendred");
	let [img, setImg] = useState(imgs[0]);
	let [name, setName] = useState('');
	useEffect(_ => {
		console.log('use effect');
		// setTimeout(() => {
		// 	// let prom = new Promise(resolve => {
		// 	// 	setTimeout(() => {
		// 	// 		console.log("hide");
		// 	// 		setName('hide');
		// 	// 		resolve();
		// 	// 	}, 500)
		// 	// })
		// 	// 	.then(res => {
		// 			setImg(imgs[Math.floor(Math.random() * imgs.length)]);
		// 		// 	return new Promise(res => setTimeout(res, 4000));
		// 		// })
		// 		// .then(res => {
		// 		// 	console.log("hide");
		// 		// 	setName('show');
		// 		// })
		// }, 5000);
	}, [img])
	return (
		<div className="slider-container">
			<img className={`gallery-item ${name}`} src={img} alt="slider-item" />
		</div>
	)
}