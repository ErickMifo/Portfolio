import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';
import './styles.css'

function Pagina404() {
    return(
        <motion.div
        exit={{ opacity: 0 }}
        transition={{duration: 0.6}}
        className="pagina404">

            <h1>Desculpe, essa página não foi encontrada</h1>
       <Link to='/home'>Clique para voltar para página inicial</Link>

        </motion.div>
    )
}

export default Pagina404