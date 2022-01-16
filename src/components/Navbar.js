import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';
import Submenu from './Submenu';
import data from '../data';
import logo from '../images/logo.svg';

const Navbar = () => {
    const { openSidebar, isSubmenuOpen, openSubmenu, closeSubmenu } = useGlobalContext();

    const [submenuData, setSubmenuData] = useState({
        title: '',
        color: '',
        links: [],
        location: { x: '50%', y: '5rem' },
    });

    const showSubmenu = (e) => {
        const submenuData = data.find((item) => item.title === e.target.textContent);
        const coords = e.target.getBoundingClientRect();
        const x = coords.left + coords.width / 2;
        const y = coords.bottom;
        setSubmenuData({ ...submenuData, location: { x, y } });
        openSubmenu();
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName !== 'LI' && isSubmenuOpen) {
            closeSubmenu();
        }
    };

    return (
        <>
            <nav onMouseOver={handleMouseOver}>
                <div className='navbar section-center'>
                    <div className='navbar-header'>
                        <img src={logo} alt='logo-image' />
                        <button onClick={openSidebar}>
                            <FaBars />
                        </button>
                    </div>
                    <ul className='navbar-menu'>
                        {data.map((item, index) => {
                            return (
                                <li key={index} onMouseOver={showSubmenu}>
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                    <button className='btn'>sign in</button>
                </div>
            </nav>
            <Submenu submenuData={submenuData} isSubmenuOpen={isSubmenuOpen} />
        </>
    );
};

export default Navbar;
