import React, { Component } from 'react';

class BackThree extends Component {
	state = {};
	render() {
		return (
			<div className="card-style card-three-back color-white " id="c3b">
				<h1 className="h1style">Contact Information</h1>
				<ul className="contact-list">
					<li>
						<i className="fab fa-github" />
					</li>
					<li>
						<i className="far fa-envelope" />
					</li>
					<li>
						<i className="fab fa-twitter" />
					</li>
				</ul>
			</div>
		);
	}
}

export default BackThree;
