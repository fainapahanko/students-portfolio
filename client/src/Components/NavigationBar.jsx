import React from 'react';
import {Nav, NavbarBrand, NavItem, NavLink, Navbar} from 'reactstrap'
import '../index.css'

class NavigationBar  extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/students">Students</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects">Projects</NavLink>
                </NavItem>
                </Nav>
          </Navbar>
         );
    }
}
 
export default NavigationBar ;