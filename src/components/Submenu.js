import React, { useState, useEffect } from 'react';

const Submenu = ({ submenuData, isSubmenuOpen }) => {
    const [columns, setColumns] = useState('repeat(2, 1fr)');

    const {
        title,
        color,
        links,
        location: { x, y },
    } = submenuData;

    useEffect(() => {
        const screenWidth = document.documentElement.clientWidth;
        if (screenWidth >= 1024) {
            if (links.length >= 4) {
                setColumns('repeat(4, 1fr)');
            } else if (links.length === 3) {
                setColumns('repeat(3, 1fr)');
            } else {
                setColumns('repeat(2, 1fr)');
            }
        } else {
            if (links.length >= 4) {
                setColumns('repeat(3, 1fr)');
            } else {
                setColumns('repeat(2, 1fr)');
            }
        }
    }, [submenuData]);

    return (
        <article className={`submenu ${isSubmenuOpen ? 'show' : ''}`} style={{ top: y, left: x }}>
            <h4>{title}</h4>
            <ul className={`submenu-list ${color}`} style={{ gridTemplateColumns: columns }}>
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
};

export default Submenu;
