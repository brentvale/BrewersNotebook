import React, {Component} from 'react';

export default class BirthdayTimer extends Component{
	constructor(){
		super();
		this.state = {
			birthday: null,
			nowTime: null
		}
		this.numberWithCommas = this.numberWithCommas.bind(this);
	}
	
	componentDidMount(){
		this.startTime();
		this.setState({birthday: new Date(1956, 8, 5), nowTime: new Date()});
	}
	
	startTime(){
		this.timeInterval = setInterval(() => {
			this.setState({nowTime: new Date()})
		}, 200);
	}
	
	numberWithCommas(val){
		return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
	render(){
		if(!this.state.birthday){
			return <div></div>;
		}
		let diff = this.state.nowTime - this.state.birthday;
		//need to add Leap Year days
		
		const totalYears = this.state.nowTime.getFullYear() - this.state.birthday.getFullYear();
		const leapDaysToAdd = totalYears/4;
		
		//days plus 7 hours for PST
		diff += leapDaysToAdd*24*60*60*1000 + 7*60*60*1000
		
		const miliSeconds = diff;
		const seconds = Math.floor(miliSeconds/1000);
		const minutes = Math.floor(seconds/60);
		const hours = Math.floor(minutes/60);
		const days = Math.floor(hours/24);
		const years = Math.floor(days/365);

		return(
			<div id="timersContainer" className="center-block">
				Looks like you&#39;re 
					<p><span>{this.numberWithCommas(years)}</span> years old</p>
					<p className="or-block">or</p>
					<p><span>{this.numberWithCommas(days)}</span> days old</p>
					<p className="or-block">or</p>
					<p><span>{this.numberWithCommas(hours)}</span> hours old</p>
					<p className="or-block">or</p>
					<p><span>{this.numberWithCommas(minutes)}</span> minutes old</p>
					<p className="or-block">or</p>
					<p><span>{this.numberWithCommas(seconds)}</span> seconds old</p>
					<p className="or-block">or</p>
					<p><span>{this.numberWithCommas(miliSeconds)}</span> mili-seconds old</p>
			
				
				
				
				
				
				
			</div>
		)
	}
}