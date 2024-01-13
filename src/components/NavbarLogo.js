import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const NavbarLogo = () => {
    const letters = 'seansongss'.split('');
    return letters.map((letter, index) => (
        <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * index, duration: 1 }}
            style={{ display: 'inline-block' }}
        >
            {letter}
        </motion.span>
    ));
};


export default NavbarLogo;