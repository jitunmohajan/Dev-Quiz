import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Header.css'
const Header = () => {
    return (
        <div>
            

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='text-primary fs-1' href="/">Dev <span className='text-warning'>-Quiz</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto">
                        <NavLink className="me-3 nav-design {({ isActive }) => isActive ? 'active' : undefined}" to="/">Home</NavLink>
                        <NavLink className="me-3 nav-design {({ isActive }) => isActive ? 'active' : undefined}" to="topics">Topics</NavLink>
                        <NavLink className="me-3 nav-design {({ isActive }) => isActive ? 'active' : undefined}"  to="statistics">Statistics</NavLink>
                        <NavLink className="me-3 nav-design {({ isActive }) => isActive ? 'active' : undefined}"  to="blogs">Blogs</NavLink>
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;