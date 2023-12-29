import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';
import Hobbies from '../pages/Hobbies';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';

import './AnimatedRoutes.css'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes