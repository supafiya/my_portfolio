import React, { Component } from 'react';
import FrontTwo from './card_two/FrontTwo';
import BackTwo from './card_two/BackTwo';
import './card-style.css';

function handleHover() {
	const card2 = document.querySelector('.whole-card-two');
	const c2f = document.getElementById('c2f');
	const c2b = document.getElementById('c2b');

	card2.classList.add('is-flipped');
	c2f.style.border = '2px solid rgb(119, 194, 255)';
	c2b.style.border = '2px solid rgb(119, 194, 255)';
	c2f.style.boxShadow = '0px 0px 120px 0px rgb(0, 140, 255)';
	c2b.style.boxShadow = '0px 0px 120px 0px rgb(0, 140, 255)';
	c2f.style.userSelect = 'none';
}

function handleNoHover() {
	const card2 = document.querySelector('.whole-card-two');
	const c2f = document.getElementById('c2f');
	const c2b = document.getElementById('c2b');

	card2.classList.remove('is-flipped');
	c2f.style.border = '0';
	c2b.style.border = '0';
	c2f.style.boxShadow = '12px 12px 45px 0px #00000085';
	c2b.style.boxShadow = '12px 12px 45px 0px #00000085';
}

class CardTwo extends Component {
	state = {};

	render() {
		return (
			<div className="scene2" onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
				<div className="whole-card-two">
					<FrontTwo />
					<BackTwo />
				</div>
			</div>
		);
	}
}

export default CardTwo;
