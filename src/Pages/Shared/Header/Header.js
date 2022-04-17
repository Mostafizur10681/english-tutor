import React from 'react';
import { Container, Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                    <img style={{ width: '200px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='link-items' to="/home">Home</Link>
                        <Link className='link-items' to="/services">Services</Link>
                        <Link className='link-items' to="/blogs">Blogs</Link>
                    </Nav>
                    <Nav >
                        <Link className='link-items' to="/about">About</Link>
                        <Link className='link-items' eventKey={2} to="/login">
                            Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;