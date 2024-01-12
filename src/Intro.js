import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import './Intro.css';

const introVariants = {
    initial: {
        x: '50vw',
        y: '50vh',
        opacity: 1,
    },
    animate: {
        x: 0,
        y: 0,
        transition: {
            duration: 2,
        }
    },
    exit: {
        opacity: 0,
    }
}

function Intro() {
    return (
        <div className='intro'>
            <motion.div
                classname='introLogo'
                variants={introVariants}
                initial='initial'
                animate='animate'
            >
                seansongss
            </motion.div>
        </div>

    )
}

export default Intro