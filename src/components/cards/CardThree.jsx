import React, { Component } from 'react';
import FrontThree from './card_three/FrontThree';
import BackThree from './card_three/BackThree';
import './card-style.css';

function handleHover() {
	const card3 = document.querySelector('.whole-card-three');
	const c3f = document.getElementById('c3f');
	const c3b = document.getElementById('c3b');

	card3.classList.add('is-flipped');
	c3f.style.border = '2px solid rgb(119, 194, 255)';
	c3b.style.border = '2px solid rgb(119, 194, 255)';
	c3f.style.boxShadow = '0px 0px 120px 0px rgb(0, 140, 255)';
	c3b.style.boxShadow = '0px 0px 120px 0px rgb(0, 140, 255)';
	c3f.style.userSelect = 'none';
}

function handleNoHover() {
	const card3 = document.querySelector('.whole-card-three');
	const c3f = document.getElementById('c3f');
	const c3b = document.getElementById('c3b');

	card3.classList.remove('is-flipped');
	c3f.style.border = '0';
	c3b.style.border = '0';
	c3f.style.boxShadow = '12px 12px 45px 0px #00000085';
	c3b.style.boxShadow = '12px 12px 45px 0px #00000085';
}

class CardOne extends Component {
	state = {};

	render() {
		return (
			<div className="scene3" onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
				<div className="whole-card-three">
					<FrontThree />
					<BackThree />
				</div>
			</div>
		);
	}
}

export default CardOne;
