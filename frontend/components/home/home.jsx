import React, {Component} from 'react';
import { withRouter } from 'react-router';

class Home extends Component{
	constructor(){
		super();
		this.state = {
			
		};
		this.navigateTo = this.navigateTo.bind(this);
	}
	
	navigateTo(path){
		this.props.router.push(path);
	}
	
	render(){
		return(
			<div>
			
				<div className="col-xs-6 col-sm-4">
					<div className="box-with-shadow center-block main-menu-item hand-on-hover" onClick={() => {this.navigateTo("/brew")}}>
						<h3>Brew Now</h3>
						<img src="https://image.ibb.co/dN4PnF/beer_kettle.png"/>
						
					</div>
				</div>
						
				<div className="col-xs-6 col-sm-4">
					<div className="box-with-shadow center-block main-menu-item hand-on-hover"  onClick={() => {this.navigateTo("/edit_batches")}}>
						<h3>Prepare</h3>
					</div>
				</div>
						
				<div className="col-xs-6 col-sm-4">
					<div className="box-with-shadow center-block main-menu-item hand-on-hover"  onClick={() => {this.navigateTo("/batches")}}>
						<h3>Your Brews</h3>
					</div>
				</div>
						
			</div>
		)
	}
};

export default withRouter(Home);