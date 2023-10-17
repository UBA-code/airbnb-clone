import Group from './imgs/group.png';
import one from './imgs/groupe/1.png';
import two from './imgs/groupe/2.png';
import three from './imgs/groupe/3.png';
import four from './imgs/groupe/4.png';
import five from './imgs/groupe/5.png';
import six from './imgs/groupe/6.png';
import seven from './imgs/groupe/7.png';
import eight from './imgs/groupe/8.png';
import nine from './imgs/groupe/9.png';
import './Home.css';
import Slider from './Slider';
import Cards from './Cards';

export default function Home() {
	let cardExample = {
		img: one,
		status: "SOLD OUT",
		rating: "5.0",
		numberOfFeedbacks: "6",
		location: "USA",
		title: "Life lessons with Katie Zaferes",
		price: "$136",
		id: 0
	};

	return (
		<div className="home-container">
			<div className="first-gallery">
				<img className='desktop-gallery' src={Group} alt="gallery img" />
				<div className="mobile-gallery">
					<Slider imgs={[one, two, three, four, five, six, seven, eight, nine]} />
				</div>
			</div>
			<div className="title">
				<h1 className='title-header'>Online Experiences</h1>
				<p className='title-p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
			</div>
			<div className="cards-container">
				<Cards arr={[cardExample]} />
			</div>
		</div>
	)
}
