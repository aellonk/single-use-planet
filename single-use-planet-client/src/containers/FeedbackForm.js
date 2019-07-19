import React, { Component } from 'react';

class FeedbackForm extends Component {
	render() {
		return (
			<div>
				<h3>Has this site helped you reduce, reuse, or recycle your items? </h3>
				<form>
					<button value="Submit">Yes</button>
				</form>
			</div>
		)
	}
}

export default FeedbackForm;