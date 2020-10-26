import React from "react";
import "./styles.css";
import Typed from "react-typed";
import NavBar from '../navbar'
import Cards from "../cards/cards";

const subTexto = 
"Título Tetxo Texto Texto Título Tetxo Texto Texto Título Tetxo Texto Texto Título Tetxo Texto Texto"

function Home() {
  return (

    <div>
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

        <Cards />
 </div>

</div>

  );
}

export default Home;