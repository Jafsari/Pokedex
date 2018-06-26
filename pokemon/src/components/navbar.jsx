import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/navbar.css'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar id="bg-light" color="light" light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" id ="bg-light" className="mr-auto white poke">Pokedex</NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink id="NavColor" >Pokemon</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="NavColor" >About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}