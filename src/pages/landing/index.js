import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../../components/helloWorld';
import HelloWorld2 from '../../components/helloWorld2';
import './styles.css';

function Landing() {

    const [click, setClick] = useState(true)


    const handleClick = () => {
      setClick(false)
      }
    return(

        <motion.div 
        exit={{ opacity: 0 }}
        transition={{duration: 0.6}}
        onClick={handleClick}>

        {click ? <HelloWorld /> :
        <Link
        to="/home">
        <button className="landing"
        onClick={() =>{document.title = "Home | Erick Mifo"}}>
          <HelloWorld2 />
        </button>
        </Link>
        }
        </motion.div>
    )
}

export default Landing;