import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion'

function Libraries() {
    const ref = useRef();

    const isInView = useInView(ref, { margin: '-100px' });

    const libraries_logo = [
        { name: 'ReactJS', file: 'react-96.png' },
        { name: 'React Native', file: 'react-native-96.png' },
        { name: 'Tensorflow', file: 'tensorflow-96.png' },
        { name: 'Firebase', file: 'firebase-96.png' },
        { name: 'Django', file: 'django-96.png' },
        { name: 'Selenium', file: 'selenium-96.png' },
        { name: 'GitHub', file: 'github-96.png' },
    ];

    return (
        <motion.div className='libraries-list'>
            {tool_logo.map((libraries_logo, index) => (
                <motion.p
                    className='libraries'
                    key={libraries_logo.name}
                    initial={{ opacity: 0, x: -10 }}
                    ref={ref}
                    animate={isInView && { opacity: 1, x: 0 }}
                    transition={{ delay: .85 + 0.6 * index, duration: 1 }}
                    style={{ display: 'inline-block' }}
                >
                    <img className='libraries-image' src={libraries_logo.file} alt={libraries_logo.name} />
                    <div>{libraries.name}</div>
                </motion.p>
            ))}
        </motion.div>
    );
}

export default Libraries