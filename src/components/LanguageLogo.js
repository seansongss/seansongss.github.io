import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';

import './LanguageLogo.css'

const LanguageLogo = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: '-10px' });

    const languages = [
        { name: 'JavaScript', file: 'javascript-96.png' },
        { name: 'Python', file: 'python-96.png' },
        { name: 'Java', file: 'java-96.png' },
        { name: 'C', file: 'c-programming-96.png' },
        { name: 'SQL', file: 'sql-96.png' }
    ];

    return (
        <motion.div className='language-list'>
            {languages.map((language, index) => (
                <motion.p
                    className='language'
                    key={language.name}
                    initial={{ opacity: 0, x: -10 }}
                    ref={ref}
                    animate={isInView && { opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + 0.6 * index, duration: 1 }}
                    style={{ display: 'inline-block' }}
                >
                    <img className='language-image' src={language.file} alt={language.name} />
                    <div>{language.name}</div>
                </motion.p>
            ))}
        </motion.div>
    );
};

export default LanguageLogo;
