import React from "react";
import "./styles.css";
import Typed from "react-typed";
import NavBar from '../navbar'
import CardsHome from "../cards/cardsHome";

const subTexto = 
"Título Tetxo Texto Texto Título Tetxo Texto Texto Título Tetxo Texto Texto Título Tetxo Texto Texto"

function Home() {
  return (

<>
    <NavBar />
    <div className="home">
       
    <Typed
        className="typedTitle"
        strings={[
          "Olá, meu nome é Erick"
        ]}
        typeSpeed={50}
        cursorChar=""
      />

        <p className="Sub">{subTexto}</p>

        <CardsHome />
 </div>
</>

  );
}

export default Home;