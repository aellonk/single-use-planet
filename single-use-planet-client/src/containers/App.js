import React, { Component } from 'react';
import Items from './Items';
import FeedbackForm from './FeedbackForm'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/items')
		.then(response => response.json())
		.then(items => this.setState({ items}))
	}

	render() {
		console.log(this.state)
		return (
			<div> 
				App Container
				<Items items={this.state.items} />
				<FeedbackForm />
			</div>
		)
	}
}

export default App;