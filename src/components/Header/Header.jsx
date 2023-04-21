import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        <div>
            

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='text-primary fs-1' href="/">Dev-Quiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="me-3" to="/"><Button variant="primary">Home</Button></NavLink>
                        <NavLink className="me-3" to="/"><Button variant="primary">Topics</Button></NavLink>
                        <NavLink className="me-3"  to="statistics"><Button variant="primary">Statistics</Button></NavLink>
                        <NavLink className="me-3"  to="blogs"><Button variant="primary">Blogs</Button></NavLink>
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;