import React, { Component } from 'react';

class FrontOne extends Component {
	state = {};
	render() {
		return (
			<div className="card-style card-one-front" id="c1f">
				<img src={require('./../../../img/me.JPG')} alt="img" />
				<h1>About Me</h1>
			</div>
		);
	}
}

export default FrontOne;
