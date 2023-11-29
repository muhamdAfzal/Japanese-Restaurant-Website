import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-white p-5'>
            <div className='container'>
                <Row>
                    <Col md={4} className='me-5'>
                        <div>
                            <h1>Japanese Restaurant</h1>
                            <p className='mt-3'>All rights reserve to the ©Japanese Restaurant</p>
                        </div>
                        <div>
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                        </div>
                    </Col>
                    <Col md={4} className='px-5 mt-2'>
                        <Link to='./home'>HOME</Link>
                        <br />
                        <Link to='./about'>About Us</Link>
                        <br />
                        <Link to='./contact'>Contact Us</Link>
                        <br />
                        <Link to='./blog'>Blog</Link>
                    </Col>
                    <Col>
                    <h5 className='mb-3'>+65 8223 0925</h5>
                    <h5 className='mb-3'>enquiries@jprestaurant.com</h5>
                    <h5>Tokyo, Japan</h5>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;