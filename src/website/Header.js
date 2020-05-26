import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className="website-header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand as={Link} to="/">Website Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Our Services" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/service">Our Service 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service">Our Service 2</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service">Our Service 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/userdata">User Table</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/admin">Admin Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;