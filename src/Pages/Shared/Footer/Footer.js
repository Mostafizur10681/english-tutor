import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-dark mt-5">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <Nav className="me-auto">
                                <Link className='footer-link' to="/home">Home</Link>
                                <Link className='footer-link' to="/services">Services</Link>
                                <Link className='footer-link' to="/blogs">Blogs</Link>
                            </Nav>
                            <Nav >
                                <Link className='footer-link' to="/about">About</Link>
                                <Link className='footer-link' eventKey={2} to="/login">
                                    Login
                                </Link>
                            </Nav>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <Link to='/company'>Company</Link>
                                <Link to='/terms'>Terms and Condition</Link>
                                <Link to='/carrier'>Carrier</Link>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>English Tutor</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p class="copyright">Company Name © 2018</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;