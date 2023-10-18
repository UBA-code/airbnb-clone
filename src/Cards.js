import "./Cards.css"
import starImg from './imgs/starIcon.svg'

export default function Cards({ arr }) {
	return (
		<div className="cards">
			{arr.map((elem) => {
				return (
					<div className="card" key={elem.id}>
						<div className="card-img">
							<div className="img" style={{ backgroundImage: `url(${elem.img})` }}></div>
							<span className="item-status">{elem.status}</span>
						</div>
						<div className="rating-box">
							<img src={starImg} alt="star icon" style={{ width: "14px" }} />
							<div className="rating">{elem.rating}</div>
							<div className="feedback-count">({elem.numberOfFeedbacks})</div>
							<span className="location-dot">•</span>
							<div className="location">{elem.location}</div>
						</div>
						<div className="title">{elem.title}</div>
						<div className="price-box">
							<span className="price">From {elem.price}</span>
							<span className="light-font"> / person</span>
						</div>
					</div>
				)
			})}
		</div>
	)
}

// ? let cardExample = {
// ? 	img: "./imgs/groupe/1.png",
// ? 	status: "SOLD OUT",
// ? 	rating: "5.0",
// ? 	numberOfFeedbacks: "6",
// ? 	location: "USA",
// ? 	title: "Life lessons with Katie Zaferes",
// ? 	price: "$136",
// ? 	id: 0
// ? };