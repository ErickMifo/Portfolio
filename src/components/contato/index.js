import { motion } from 'framer-motion';
import React from 'react';
import NavBar from '../navbar'

function Contato() {
    return(
        <motion.div
        exit='out'>
            <NavBar />
        </motion.div>
    )
}

export default Contato