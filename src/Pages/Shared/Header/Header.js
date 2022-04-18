import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                    <Link to='/'><img style={{ width: '200px' }} src={logo} alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='link-items' to="/home">Home</Link>
                        <Link className='link-items' to="/services">Services</Link>
                        <Link className='link-items' to="/blogs">Blogs</Link>
                        <Link className='link-items me-2' to="/about">About</Link>
                    </Nav>
                    <Nav className='align-items-center'>

                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-danger' >Sign Out</button>
                                :
                                <Link className='link-items btn btn-warning header-login' eventKey={2} to="/login">
                                    Login
                                </Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;