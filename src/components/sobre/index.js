import React from 'react';
import NavBar from '../navbar';
import './styles.css';

import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";



const Primeiro = "Sou de Sâo Paulo capital e, em 2017, me mudei para Florianópolis pois comecei a cursar administração pela UFSC. "
const Segundo = "Ao decorrer da graduação trabalhei em alguns lugares, mas nada relacionado à programação, "
const Terceiro = "só durante a pandemia do Covid, quando tive que voltar para SP, usei meu tempo livre para começar a aprender JavaScript. "
const Quarto = "Meu primeiro projeto foi feito com NodeJS e MongoDB, era um WebScrapper que resolvia um problema de um jogo de celular. "
const Quinto = "Eu postei o link do GitHub do projeto e expliquei como funcionava em uma pagina do Reddit e foi o post com mais UpVote do dia (pequenos orgulhos, certo?!)."
const Sexto = "Mas era meu primeiro projeto e o codigo era muito bagunçado e difícil de ler, tendo poucos resultados. "
const Setimo = "Depois dessa experiência continuei a aprender programação, fiz alguns cursos onlines"
const Oitavo = "(uma imersão Alura e outros cursos no Youtube) e, atualmente, estou fazendo projetos com foco maior para o Front-End."
const Nono = " Se precisar de algo ou quiser conversar, fique à vontade para usar a aba de contato."




function Sobre() {


    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  
    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);


    return (
<>
      

            <NavBar />
            <svg className="progress-icon" >
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="black"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1 // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="black"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
            <motion.div
            className="sobre"
            initial={{y: 300, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{ y: -300, opacity: 0 }}
            transition={{duration: 1}}>

            <p 
            className="sobreText">
                {Primeiro}
                {Segundo}
                {Terceiro} 
                <br /> 
                {Quarto} 
                {Quinto} 
                <br /> 
                {Sexto} 
                {Setimo} 
                <br /> 
                {Oitavo} 
                <br /> 
                {Nono}
            </p>
            </motion.div>
       
</>
    )
}

export default Sobre