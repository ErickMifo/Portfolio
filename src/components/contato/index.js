import { motion } from 'framer-motion';
import React from 'react';
import NavBar from '../navbar'
import Formulario from './form/form';
import './styles.css'

function Contato() {
    return(
        <motion.div
        exit={{ opacity: 0 }}
        transition={{duration: 0.6}}>
            <NavBar />

       
            <div className="contato">
            <h1 className="titleContato"> Como posso ajudar? </h1>
            <Formulario />

            </div>
        </motion.div>
    )
}

export default Contato