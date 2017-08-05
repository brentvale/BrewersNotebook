import React, {Component} from 'react';

import FireWork from './firework';
import BirthdayTimer from './birthday_timer';

export default class BirthdayContainer extends Component{
	constructor(){
		super();
		this.state = {
			ready: false
		}
	}
	
	componentDidMount(){
		let that = this;
		setTimeout(() => {
			this.setState({ready: true});
		}, 2000)
	}
	
	render(){
		const { currentUser } = this.props;
		
		let content = this.state.ready ?  <div style={{marginTop: "20px"}}>
																				<FireWork klass="firework-1" firstTimeout={50}/>
																				<FireWork klass="firework-2" firstTimeout={100}/>
																				<FireWork klass="firework-3" firstTimeout={150}/>
																				<FireWork klass="firework-1" firstTimeout={200}/>
																				<FireWork klass="firework-2" firstTimeout={250}/>
																				<FireWork klass="firework-3" firstTimeout={300}/>
																				<FireWork klass="firework-1" firstTimeout={350}/>
																				<FireWork klass="firework-2" firstTimeout={400}/>
																				<FireWork klass="firework-3" firstTimeout={450}/>
																				<h1 id="birthdaySign">Happy Birthday {currentUser.first_name}!!</h1>
																				<BirthdayTimer />
																			</div> : <div id="firstFirework" className="firework"></div>;
		return(
			<div>
				{content}
			</div>
		)
	}
}