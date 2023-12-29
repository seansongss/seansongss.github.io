import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion';

function Experience() {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Experience</h1>
            <p>This is a page experience</p>
        </motion.div>
    )
}

export default Experience