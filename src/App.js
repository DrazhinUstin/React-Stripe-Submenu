import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <>
            <Navbar
                openSidebar={openSidebar}
                isSubmenuOpen={isSubmenuOpen}
                openSubmenu={openSubmenu}
                closeSubmenu={closeSubmenu}
            />
            <Hero isSubmenuOpen={isSubmenuOpen} closeSubmenu={closeSubmenu} />
            <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </>
    );
};

export default App;
