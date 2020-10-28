import { motion } from 'framer-motion';
import React from 'react';
import NavBar from '../navbar'
import Formulario from './form/form';
import './styles.css'

function Contato() {
    return(
        <motion.div
        exit='out'>
            <NavBar />
            
            <div className="contato">

            <h1> Como posso ajudar? </h1>
            <Formulario />

            </div>
        </motion.div>
    )
}

export default Contato