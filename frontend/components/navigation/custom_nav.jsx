import React, {Component} from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {withRouter, Link} from 'react-router';

class CustomNav extends Component{
	componentDidMount(){
		this.props.requestCurrentUser();
	}
	
	render(){
		const {batches, currentUser} = this.props;

		const currentUserDisplay = currentUser ? <NavItem >{`${currentUser.first_name} ${currentUser.last_name}`}</NavItem> : "";
		
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
	    </Navbar>
	  ) 
	}
}
export default withRouter(CustomNav);