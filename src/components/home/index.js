import React from "react";
import "./styles.css";
import Typed from "react-typed";
import NavBar from '../navbar'
import CardsHome from "../cards/cardsHome";
import { motion } from "framer-motion";

const subTexto = 
"Sou estudante de Administração pela UFSC e {adjetivo} por Front-end."



function Home() {
  return (

<>
    <NavBar />
    <motion.div 
    exit={{ opacity: 0 }}
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

        <p className="Sub">{subTexto}</p>

        <CardsHome />
 </motion.div>
</>

  );
}

export default Home;