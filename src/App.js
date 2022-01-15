import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Sidebar />
        </>
    );
};

export default App;
