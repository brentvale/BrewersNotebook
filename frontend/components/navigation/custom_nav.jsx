import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const CustomNav = ({ batches }) => {
  
	const listItems = batches.map((batch, idx) => (
	    <MenuItem key={idx} href={"#/batches/" + batch.name_of_beer}>{batch.name_of_beer}</MenuItem>
	));
	
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
          <NavItem  href="/users/sign_out"
                    rel="nofollow" 
                    data-method="delete">Sign Out</NavItem>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) 
}

export default CustomNav;