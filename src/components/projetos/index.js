import { motion } from 'framer-motion';
import React from 'react';
import CardsProjects from '../cards/cardsProjects';
import NavBar from '../navbar';
import './styles.css'

const initial = { x: -300, opacity: 0 } 
const animate = { x: 0, opacity: 1 } 

const projetos = "Aqui estão alguns dos meus projetos."
const interesse = "São do meu interesse: JavaScript, CSS, HTML, Reactjs e Nodejs"
function Projetos() {
    return (
        <div>
            <NavBar />
            <motion.div
            exit={{ x: 300, opacity: 0 }}
            transition={{duration: 0.6}}
            className="projects">

         <div  className="mainText">
            <motion.h1 
                  initial={initial}
                  animate={animate}
                  transition={{duration: 1}}
            className="titleproject">{projetos}</motion.h1>
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