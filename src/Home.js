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



export default function Home() {
	return (
		<div className="home-container">
			<div className="first-gallery">
				{/* <img src={Group} alt="gallery img"/> */}
				<Slider imgs={[one, two, three, four, five, six, seven, eight, nine]}/>
			</div>
		</div>
	)
}
