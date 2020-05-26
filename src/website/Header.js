import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return(
        <div className="website-header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">Website Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                        <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Service Name 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Service Name 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Service Name 3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Service Name 4</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Service Name 5</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">User Table</Nav.Link>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;