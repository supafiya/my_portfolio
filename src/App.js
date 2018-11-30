import React, { Component } from 'react';
import './App.css';
import CardOne from './components/cards/CardOne';
import CardTwo from './components/cards/CardTwo';
import CardThree from './components/cards/CardThree';

class App extends Component {
	handleHover = () => {
		console.log('ayyy');
	};

	render() {
		return (
			<div className="App">
				<div className="cards-wrapper">
					<div className="app-CardOne">
						<CardOne />
					</div>
					<div className="app-CardTwo">
						<CardTwo />
					</div>
					<div className="app-CardThree">
						<CardThree />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
