import React from 'react';
import CardsProjects from '../cards/cardsProjects';
import NavBar from '../navbar';
import './styles.css'

function Projetos() {
    return (
        <div>
            <NavBar />
            <div className="projects">

         <div  className="mainText">
            <h1 className="titleproject">  Aqui estão alguns dos meus projetos. </h1>
            <p className="interests"> São do meu interesse: JavaScript, CSS, HTML, Reactjs e Nodejs</p>
        </div>

            <CardsProjects />
            </div>
        </div>
    )
}

export default Projetos;