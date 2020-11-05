import React from "react";
import "./styles.css";
import Typed from "react-typed";
import NavBar from '../../components/navbar'
import GitHubIcon from '@material-ui/icons/GitHub';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import { Fade, makeStyles } from '@material-ui/core';
import { motion } from "framer-motion";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
      fontSize:"2rem",
      padding:"10px",
      '&:hover':{
        color:"#00a0c6",
     
      }
  },
  

})

function Home() {
  const classes = useStyles()
  const Curriculo = 
  "https://docs.google.com/document/d/1ZlRj1xWq4XTpfodbYPDY4BCBvD0RYTZh9I2G510aGvg/edit#heading=h.d5q0p6aqmaj0"

  return (

  <div id="Landing">
 
    <NavBar />
    <motion.div
    exit={{y: 300, opacity: 0 }}
    transition={{duration: 0.6}}
    className="home">
       
    <Typed
        className="typedTitle"
        strings={[
          "Olá, meu nome é Erick."
        ]}
        typeSpeed={50}
        cursorChar=""
      />
      <div  className="Sub">
        <p>Sou estudante de Administração pela UFSC e interessado por desenvolvimento Front End</p> 
      
      </div>

<div>
      <Tooltip 
      title="GitHub" 
      arrow 
      TransitionComponent={Fade} 
      TransitionProps={{ timeout: 600 }} >
      <a rel="noopener noreferrer" href="https://github.com/ErickMifo" target="_blank">
        <GitHubIcon className={classes.root} />
      </a>
      </Tooltip> 
 
      <Tooltip 
      title="CV" 
      arrow 
      TransitionComponent={Fade} 
      TransitionProps={{ timeout: 600 }} 
      >
      <a rel="noopener noreferrer" href={Curriculo} target="_blank">
        <FormatAlignLeftIcon className={classes.root} />
      </a>
      </Tooltip> 

  </div>

 </motion.div>
</div>

  );
}

export default Home;
