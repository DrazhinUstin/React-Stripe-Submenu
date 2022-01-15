import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar section-center'>
                <div className='navbar-header'>
                    <img src={logo} alt='logo-image' />
                    <button>
                        <FaBars />
                    </button>
                </div>
                <ul className='navbar-menu'>
                    <li>products</li>
                    <li>developers</li>
                    <li>company</li>
                </ul>
                <button className='btn'>sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
