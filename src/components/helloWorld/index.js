import { motion } from 'framer-motion';
import React from 'react';
import './styles.css'

function HelloWorld2() {
    return(
        <div className="landingWrap">
        <motion.div
        exit={{ x: -300 }}
        transition={{duration: 1}}
        className="hello-world1">
                <div className="saudacoes">
            <h1> Boas-vindas ao meu portfólio, </h1>
                </div>
        </motion.div>

           <motion.div
           exit={{ x: 300 }}
           transition={{duration: 1}}
           className="hello-world2">
                   <div className="saudacoes">
               <h2> Permita-me lhe mostrar. </h2>
                   </div>
           </motion.div>
           
           </div>
    )   
};

export default HelloWorld2