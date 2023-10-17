import "./Cards.css"

export default function Cards({ arr }) {
	return (
		<div className="cards">
			{arr.map((elem) => {
				return (
					<div className="card" key={elem.id}>
						<div className="card-img">
							<img src={elem.img} alt="card"/>
						</div>
						<div className="rating-box">
							<div className="rating">{elem.rating}</div>
							
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