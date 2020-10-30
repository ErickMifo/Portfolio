import React, { useState } from "react";
import "./styles.css";
import Typed from "react-typed";
import NavBar from '../../components/navbar'
import CardsHome from "../../components/cards/cardsHome";
import { motion } from "framer-motion";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


function Home() {

  const [adj, setAdj] = useState('');

  const handleChange = (event) => {
    setAdj(event.target.value);

  };

  return (

  <div>
 
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
        <p>Sou estudante de Administração pela UFSC e</p> 
<div className="iptFront">
        <Select
         className="ipt"
          value={adj}
          name = {adj === 'Algum adjetivo absurdo/cringe' ? "sim" : "não"}
          onChange={handleChange}
        >
          <MenuItem value='Interessado' >Interessado</MenuItem>
          <MenuItem value='Algum adjetivo absurdo/cringe'>Algum adjetivo absurdo/cringe</MenuItem>
        </Select>
        <p>por Front-end</p>
</div>
      </div>
        <CardsHome />
 </motion.div>
</div>

  );
}

export default Home;
