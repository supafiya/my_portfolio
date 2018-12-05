import React, { Component } from 'react';
import FrontOne from './card_one/FrontOne';
import BackOne from './card_one/BackOne';
import './card-style.css';

function handleHover() {
	const card = document.querySelector('.whole-card-one');
	const c1f = document.getElementById('c1f');
	const c1b = document.getElementById('c1b');

	card.classList.add('is-flipped');
	c1f.style.border = '2px solid rgb(119, 194, 255)';
	c1b.style.border = '2px solid rgb(119, 194, 255)';
	c1f.style.boxShadow = '0px 0px 120px 0px rgb(0, 140, 255)';
	c1b.style.boxShadow = '0px 0px 120px 0px rgb(0, 140, 255)';
	c1f.style.userSelect = 'none';
}

function handleNoHover() {
	const card = document.querySelector('.whole-card-one');
	const c1f = document.getElementById('c1f');
	const c1b = document.getElementById('c1b');

	card.classList.remove('is-flipped');
	c1f.style.border = '0';
	c1b.style.border = '0';
	c1f.style.boxShadow = '12px 12px 45px 0px #00000085';
	c1b.style.boxShadow = '12px 12px 45px 0px #00000085';
}

class CardOne extends Component {
	state = {};

	render() {
		return (
			<div className="scene1" onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
				<div className="whole-card-one">
					<FrontOne />
					<BackOne />
				</div>
			</div>
		);
	}
}

export default CardOne;
