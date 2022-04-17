import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div class="footer-dark mt-5">
            <footer>

                <p className='text-center'>
                    <small>Copywrite &copy; {year} | By Mostafizur Rahman</small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;