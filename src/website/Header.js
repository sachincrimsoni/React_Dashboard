import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className="website-header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">Website Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link" role="button">Home</Link>
                        <Link to="/about" className="nav-link" role="button">About Us</Link>
                        <Link to="/services" className="nav-link" role="button">Our Services</Link>
                        <Link to="/userdata" className="nav-link" role="button">User Table</Link>
                        <Link to="/contact" className="nav-link" role="button">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header;