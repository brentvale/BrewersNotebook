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
		
		this.firstTimeout = setTimeout(() => {
			that.setState({animating: false});
			this.secondTimeout = setTimeout(() => {
				that.setState({animating: true});
			}, timeout)
		}, 1000);
		
		const randomTimeout = Math.floor(Math.random()*1000 + 2500);
		
		this.groupAnimateTimeout = setTimeout(() => {
			that.setState({completedIntroAnimation: true});
		}, randomTimeout)
		this.setState({animating: true});
	}
	
	componentWillUnmount(){
		clearTimeout(this.firstTimeout);
		clearTimeout(this.secondTimeout);
		clearTimeout(this.groupAnimateTimeout);
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