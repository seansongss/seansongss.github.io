import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Hobbies from '../pages/Hobbies';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes