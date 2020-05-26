import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Adminheader = () => {
    return(
        <div className="website-header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand as={Link} to="/admin_home">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/admin_home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/admin_user_details">User Table</Nav.Link>
                        <Nav.Link as={Link} to="/admin_add_user">Add User</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">View Website</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Adminheader;