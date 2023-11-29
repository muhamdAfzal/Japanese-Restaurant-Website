import React, { useContext } from 'react';
import logo from '../../../../src/assets/Logo.png';
import Nav from 'react-bootstrap/Nav';
import { Button, Navbar, NavLink } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';



const Header = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className='container'>
            <img src={logo} alt="Restaurant Logo" className='mx-auto d-flex justify-content-center pt-4'/>
            <Navbar>
                <Nav>
                    <h1 className='fs-4 fw-medium'>Japanese Restaurant</h1>
                </Nav>
                <Nav className='mx-auto'>
                    <NavLink><ActiveLink to = "/home" className='mr-3'>Home</ActiveLink></NavLink>
                    <NavLink><ActiveLink to = "/about" className='mx-3'>About</ActiveLink></NavLink>
                    <NavLink><ActiveLink to = "/blog" className='mx-3'>Blog</ActiveLink></NavLink>
                </Nav>
                <Nav>
                    { user && <NavLink href=''>
                        <FaUserCircle style={{fontSize: '1.8rem'}} className="mt-1"></FaUserCircle></NavLink>
                    }
                    <NavLink>
                        { user ? 
                            <Button variant="dark">Log Out</Button> :
                            <Link to="/login">
                            <Button variant="dark">Log In</Button>
                            </Link>
                            
                        }
                    </NavLink>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;