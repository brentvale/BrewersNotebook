import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class CustomNav extends Component{
	componentDidMount(){
		this.props.requestCurrentUser();
	}
	render(){
		const {batches, currentUser} = this.props;
		const listItems = batches.map((batch, idx) => (
		    <MenuItem key={idx} href={"#/batches/" + batch.name_of_beer}>{batch.name_of_beer}</MenuItem>
		));
		const currentUserDisplay = currentUser ? <NavItem >{`${currentUser.first_name} ${currentUser.last_name}`}</NavItem> : "";
		console.log(`${currentUser}`)
	  return(
	    <Navbar inverse collapseOnSelect style={{borderRadius: "0px"}}>
	      <Navbar.Header>
	        <Navbar.Brand>
	          <a href="#/">BrewersNotebook</a>
	        </Navbar.Brand>
	        <Navbar.Toggle />
	      </Navbar.Header>
    
	      <Navbar.Collapse>
	        <Nav>
	          <NavDropdown eventKey={3} title="My Beers" id="basic-nav-dropdown">
	            {listItems}
	          </NavDropdown>
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