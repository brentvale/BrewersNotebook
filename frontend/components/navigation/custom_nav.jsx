import React, {Component} from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {withRouter, Link} from 'react-router';

import {Button, Modal} from 'react-bootstrap';
import BirthdayContainer from './birthday_container';

class CustomNav extends Component{
	constructor(){
		super();
		this.state = {
			showModal: false
		}
		this.close = this.close.bind(this);
	}
	
	componentDidMount(){
		this.props.requestCurrentUser();
		this.setState({showModal: true});
	}
	
	close(){
		this.setState({showModal: false});
	}
	
	render(){
		const {batches, currentUser} = this.props;
		if(!currentUser){
			return <Navbar inverse fixedTop style={{borderRadius: "0px"}}></Navbar>
		}

		const currentUserDisplay = currentUser ? <NavItem href="#/edit_profile">{`${currentUser.first_name} ${currentUser.last_name}`}</NavItem> : "";
		
	  return(
	    <Navbar inverse fixedTop style={{borderRadius: "0px"}}>
	      <Navbar.Header>
	        <Navbar.Brand>
	          <a href="#/">BrewersNotebook</a>
	        </Navbar.Brand>
	        <Navbar.Toggle />
	      </Navbar.Header>
    
	      <Navbar.Collapse>
	        <Nav>
	          <NavItem href="#/brew">
							Brew Now
	          </NavItem>
	          <NavItem href="#/batches">
							My Beers
	          </NavItem>
	          <NavItem href="#/edit_batches">
							Prepare
	          </NavItem>
	        </Nav>
	        <Nav pullRight>
						{currentUserDisplay}
	          <NavItem  href="/users/sign_out"
	                    rel="nofollow" 
	                    data-method="delete">Sign Out</NavItem>
          
	        </Nav>
	      </Navbar.Collapse>
						
				<Modal show={this.state.showModal} onHide={this.close}>
	        <Modal.Header closeButton>
	        </Modal.Header>
	        <Modal.Body id="fireworksModalBody">
						<BirthdayContainer currentUser={currentUser}/>
	        </Modal.Body>
	      </Modal>
	    </Navbar>
	  ) 
	}
}
export default withRouter(CustomNav);