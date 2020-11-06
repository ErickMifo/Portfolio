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
        </motion.div>



        <motion.div
        exit={{ x: 300 }}
        transition={{duration: 1}}
        className="hello-world2">
        </motion.div>
        
      
           
           </div>
    )   
};

export default HelloWorld2