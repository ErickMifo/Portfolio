import { motion } from 'framer-motion';
import React from 'react';
import './styles.css'

function HelloWorld() {
    return(
     


        <motion.div
        drag
        className="hello-world">
                <div className="saudacoes">
            <h1> Boas vindas ao meu portfólio. </h1>
            <p> Arraste e solte para continuar </p>
                </div>
        </motion.div>
    )   
};



export default HelloWorld