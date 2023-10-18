
// ? header group images
import Group from './imgs/group.png';
import one from './imgs/groupe/1.jpeg';
import two from './imgs/groupe/2.png';
import three from './imgs/groupe/3.png';
import four from './imgs/groupe/4.png';
import five from './imgs/groupe/5.png';
import six from './imgs/groupe/6.png';
import seven from './imgs/groupe/7.png';
import eight from './imgs/groupe/8.png';
import nine from './imgs/groupe/9.png';

// ? cards images
import swimmerImg from './imgs/swimer.png';
import bikeImg from './imgs/bike.jpeg';
import princeImg from './imgs/prince.jpeg';

import './Home.css';
import Slider from './Slider';
import Cards from './Cards';

export default function Home() {
	let cardExample = [
		{
			img: swimmerImg,
			status: "SOLD OUT",
			rating: "5.0",
			numberOfFeedbacks: "6",
			location: "USA",
			title: "Life lessons with Katie Zaferes",
			price: "$136",
			id: 0
		},
		{
			img: princeImg,
			status: "ONLINE",
			rating: "5.0",
			numberOfFeedbacks: "30",
			location: "USA",
			title: "Learn wedding photography",
			price: "$125",
			id: 1
		},
		{
			img: bikeImg,
			status: "ONLINE",
			rating: "4.8",
			numberOfFeedbacks: "2",
			location: "USA",
			title: "Group Mountain Biking",
			price: "$50",
			id: 2
		},
		{
			img: swimmerImg,
			status: "SOLD OUT",
			rating: "5.0",
			numberOfFeedbacks: "6",
			location: "USA",
			title: "Life lessons with Katie Zaferes",
			price: "$136",
			id: 3
		},
		{
			img: princeImg,
			status: "ONLINE",
			rating: "5.0",
			numberOfFeedbacks: "30",
			location: "USA",
			title: "Learn wedding photography",
			price: "$125",
			id: 4
		},
		{
			img: bikeImg,
			status: "ONLINE",
			rating: "4.8",
			numberOfFeedbacks: "2",
			location: "USA",
			title: "Group Mountain Biking",
			price: "$50",
			id: 5
		},
		{
			img: swimmerImg,
			status: "SOLD OUT",
			rating: "5.0",
			numberOfFeedbacks: "6",
			location: "USA",
			title: "Life lessons with Katie Zaferes",
			price: "$136",
			id: 6
		},
		{
			img: princeImg,
			status: "ONLINE",
			rating: "5.0",
			numberOfFeedbacks: "30",
			location: "USA",
			title: "Learn wedding photography",
			price: "$125",
			id: 7
		},
		{
			img: bikeImg,
			status: "ONLINE",
			rating: "4.8",
			numberOfFeedbacks: "2",
			location: "USA",
			title: "Group Mountain Biking",
			price: "$50",
			id: 8
		},
	];

	return (
		<div className='Home'>
			<div className="first-gallery">
				<img className='desktop-gallery' src={Group} alt="gallery img" />
				<div className="mobile-gallery">
					<Slider imgs={[one, two, three, four, five, six, seven, eight, nine]} />
				</div>
			</div>
			<div className="home-container">
				<div className="title">
					<h1 className='title-header'>Online Experiences</h1>
					<p className='title-p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
				</div>
				<div className="cards-container">
					<Cards arr={cardExample} />
				</div>
			</div>
		</div>
	)
}
