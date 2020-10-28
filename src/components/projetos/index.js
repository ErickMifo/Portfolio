import { motion } from 'framer-motion';
import React from 'react';
import CardsProjects from '../cards/cardsProjects';
import NavBar from '../navbar';
import './styles.css'

const initial = { opacity: 0 } 
const animate = { opacity: 1 } 
const interesse = "São do meu interesse: JavaScript, CSS, HTML, Reactjs e Nodejs"
function Projetos() {
    return (
        <div>
            <NavBar />
            <motion.div
            exit='out'
            className="projects">

         <div  className="mainText">
            <motion.h1 
                  initial={initial}
                  animate={animate}
                  transition={{duration: 1}}
            className="titleproject">  Aqui estão alguns dos meus projetos. </motion.h1>
            <motion.p
                  initial={initial}
                  animate={animate}
                  transition={{duration: 6}}
            className="interests">{interesse}</motion.p>
        </div>

            <CardsProjects />
            </motion.div>
        </div>
    )
}

export default Projetos;