import { motion } from 'framer-motion';
import React from 'react';
import NavBar from '../navbar'
import Formulario from './form/form';
import './styles.css'

function Contato() {
    return(
        <div>
            <NavBar />

       
            <motion.div
        exit={{ x: -300, opacity: 0 }}
        transition={{duration: 0.6}}
        className="contato">

            <h1 className="titleContato"> Como posso ajudar? </h1>
            <Formulario />

            </motion.div>
        </div>
    )}
    
export default Contato