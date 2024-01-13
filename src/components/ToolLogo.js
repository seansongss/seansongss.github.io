import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion'

import './ToolLogo.css'

function ToolLogo() {
    const ref = useRef();

    const isInView = useInView(ref, { margin: '-100px' });

    const tool_logo = [
        { name: 'ReactJS', file: 'react-96.png' },
        { name: 'React Native', file: 'react-native-96.png' },
        { name: 'Tensorflow', file: 'tensorflow-96.png' },
        { name: 'Firebase', file: 'firebase-96.png' },
        { name: 'Django', file: 'django-96.png' },
        { name: 'Selenium', file: 'selenium-96.png' },
        { name: 'GitHub', file: 'github-96.png' },
    ];

    return (
        <motion.div className='tool-logo-list'>
            {tool_logo.map((tool_logo, index) => (
                <motion.p
                    className='tool-logo'
                    key={tool_logo.name}
                    initial={{ opacity: 0, x: -10 }}
                    ref={ref}
                    animate={isInView && { opacity: 1, x: 0 }}
                    transition={{ delay: 1.55 + 0.6 * index, duration: 1 }}
                    style={{ display: 'inline-block' }}
                >
                    <img className='tool-logo-image' src={tool_logo.file} alt={tool_logo.name} />
                    <div>{tool_logo.name}</div>
                </motion.p>
            ))}
        </motion.div>
    );
}

export default ToolLogo;