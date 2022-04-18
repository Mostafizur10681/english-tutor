import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    // Footer Section
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer class="footer-dark mt-5 py-2">
            <p className='text-center mt-2'>
                <small>Copywrite &copy; {year} | By Mostafizur Rahman</small>
            </p>
        </footer>
    );
};

export default Footer;