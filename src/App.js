import './App.css';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="main-container">

				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Router>
			</div>
		</div >
	);
}

export default App;
