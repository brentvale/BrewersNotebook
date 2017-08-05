import React, {Component} from 'react';

export default class FireWork extends Component{
	constructor(){
		super();
		this.state = {
			animating: false,
			completedIntroAnimation: false
		}
	}
	//timeout for setting second firework launch should coincide with firework class animations
	componentDidMount(){
		let that = this;
		const timeout = this.props.firstTimeout;
		setTimeout(() => {
			that.setState({animating: false});
			setTimeout(() => {
				that.setState({animating: true});
			}, timeout)
		}, 1000);
		
		const randomTimeout = Math.floor(Math.random()*1000 + 2500);
		setTimeout(() => {
			that.setState({completedIntroAnimation: true});
		}, randomTimeout)
		this.setState({animating: true});
	}
	
	render(){
		let klassName = this.state.animating ? `firework ${this.props.klass}` : 'firework';
		if(this.state.completedIntroAnimation){
			klassName = `firework ${this.props.klass}-continuous`
		}
		
		return(
			<div className={klassName}></div>
		)
	}
}