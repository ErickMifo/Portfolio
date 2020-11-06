import { motion } from 'framer-motion';
import React from 'react';
import CardsProjects from '../../components/cards/cardsProjects';
import NavBar from '../../components/navbar';
import './styles.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const initial = { x: -300, opacity: 0 } 
const animate = { x: 0, opacity: 1 } 

const projetos = "Aqui estão alguns dos meus projetos."
const interesse = "São do meu interesse: JavaScript, CSS, HTML, Reactjs e Nodejs"
function Projetos() {
    return (
        <div id="Landing">
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
                  transition={{duration: 3}}
            className="interests">{interesse}</motion.p>
        </div>
        
            <ArrowDropDownIcon />
            <CardsProjects />
            </motion.div>
        </div>
    )
}

export default Projetos;