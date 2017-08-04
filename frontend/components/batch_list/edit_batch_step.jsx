import React, {Component} from 'react';

//Step attributes
// 		batchSize: "5 gallon",
// 		duration: 10000,
// 		instruction: "Boil for 1 hour.  Drink at least one beer.",
// 		order: 5,
// 		stopMethod: "timer",
// 		stopIndication: "Water hits 130 degrees",
// 		title: "Boil for 60 minutes",

export default class EditBatchStep extends Component{
	
	handleToggleActive(){
		this.props.toggelStepActive(this.props.step.order);
	}
	
	render(){
		const {step, active} = this.props;

		const klassName = (active) ? "step-content active" : "step-content";
		
		return(
			<div className="step-container">
				<h2 onClick={() => {this.handleToggleActive()}} className="hand-on-hover">{`Step ${step.order} ${step.title}`}</h2>
				<div className={klassName}>
					<p>{step.duration}</p>
					<p>{step.instruction}</p>
					<p>Stop when: {step.stopIndication}</p>
				</div>
			</div>
		)
	}
}