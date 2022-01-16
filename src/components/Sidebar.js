import React from 'react';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
import data from '../data';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <div className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}>
            <aside className='sidebar'>
                <ul className='sidebar-menu'>
                    {data.map((item, index) => {
                        const { title, color, links } = item;
                        return (
                            <article key={index} className='sidebar-menu-item'>
                                <h4>{title}</h4>
                                <ul className={color}>
                                    {links.map((link, index) => {
                                        const { icon, label, url } = link;
                                        return (
                                            <li key={index}>
                                                <a href={url}>
                                                    {icon}
                                                    {label}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        );
                    })}
                </ul>
                <footer className='sidebar-footer'>
                    <button className='btn'>sign in</button>
                </footer>
                <button className='sidebar-close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </aside>
        </div>
    );
};

export default Sidebar;
