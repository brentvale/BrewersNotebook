import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const CustomNav = ({ batches }) => {
  
	const listItems = batches.map((batch, idx) => (
	    <MenuItem key={idx} href={"#/batches/" + batch.name_of_beer}>{batch.name_of_beer}</MenuItem>
	));
	
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#/my_beers">BrewersNotebook</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="My Beers" id="basic-nav-dropdown">
            {listItems}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) 
}

export default CustomNav;