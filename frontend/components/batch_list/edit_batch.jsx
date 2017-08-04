import React, {Component} from 'react';

import StepsTemplate from '../../util/steps_template';

import EditBatchStep from './edit_batch_step';

export default class EditBatch extends Component{
	constructor(){
		super();
		this.state = {
			activeSteps: {},
			allActive: false
		};
		this.stepsFromTemplate = this.stepsFromTemplate.bind(this);
		this.generateActiveStepsHash = this.generateActiveStepsHash.bind(this);
		this.toggelStepActive = this.toggelStepActive.bind(this);
	}
	
	componentDidMount(){
		const activeSteps = this.generateActiveStepsHash();
		this.setState({activeSteps: activeSteps});
	}
	
	generateActiveStepsHash(){
		let stepsActiveHash = {};
		for(let i in StepsTemplate){
			stepsActiveHash[i] = false;
		}
		return stepsActiveHash;
	}
	
	stepsFromTemplate(){
		let stepsArray = [];
		for(let i in StepsTemplate){
			stepsArray.push(StepsTemplate[i]);
		}
		return stepsArray;
	}
	
	toggleAll(){
		const newActivityLevel = this.state.allActive ? false : true;
		const newActiveSteps = Object.assign({}, this.state.activeSteps);
		for(let i in newActiveSteps){
			newActiveSteps[i] = newActivityLevel;
		}
		this.setState({activeSteps: newActiveSteps, allActive: newActivityLevel});
	}
	
	toggelStepActive(step){
		let stepIsActive = this.state.activeSteps[step];
		let newActiveSteps = Object.assign({}, this.state.activeSteps);
		newActiveSteps[step] = !stepIsActive;
		this.setState({activeSteps: newActiveSteps});
	}
	
	render(){
		
		const steps = this.stepsFromTemplate();
		const toggleButtonText = (this.state.allActive) ? "Hide All Steps" : "View All Steps";
		return(
			<div id="editBatchContainer" className="center-block">
				<div id="navInfoBar">
					<div onClick={() => {this.toggleAll()}}>{toggleButtonText}</div>
				</div>
				<div style={{marginTop: "120px"}}>
					{steps.map((step, idx) => {
						return <EditBatchStep key={idx} 
																	step={step} 
																	active={this.state.activeSteps[step.order]} 
																	toggelStepActive={this.toggelStepActive}/>
					})}
				</div>
			</div>
		)
	}
}