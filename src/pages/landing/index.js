import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../../components/helloWorld';
import './styles.css';




function Landing() {


    setTimeout(function() {
    document.title = "Home | Erick Mifo"
    document.getElementById('Landing').click()
    console.log('Olá, vem sempre por aqui?')
    }, 1200)

    

    return(

        <motion.div
        exit={{ opacity: 0 }}
        transition={{duration: 1}}
        >

        <Link
        id="Landing"
        to="/home"
        className="landing">
          <HelloWorld />
        </Link>
        </motion.div>
    )
}

export default Landing;