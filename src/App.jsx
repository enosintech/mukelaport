import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Stack from './components/Stack';
import Reviews from './components/Reviews';
import Space from './components/Space';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return <div className='relative z-0 bg-black overflow-hidden'>
        <div className='h-screen overflow-scroll'>
            <Navbar />
            <Hero />
            <About /> 
            <Project />
            <Stack />
            <Reviews/>
            <Space />
            <Contact />
            <Footer />
        </div>
    </div>
}

export default App;