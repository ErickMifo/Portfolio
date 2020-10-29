import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ClearIcon from "@material-ui/icons/Clear";

function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
setClick(!click)
    }


    return(

        <div className="navBar">

            <Link to="/">
            <button
            onClick={() =>{document.title = "Home | Erick Mifo"}}
            className="buttonHome">
                 Erick Mifo 
            </button>
            </Link>

            <div className={click ? "nav-active" : "nav-links"}>

            <Link to='/sobre'>
            <button 
             onClick={() =>{document.title = "Sobre | Erick Mifo"}}
            className="buttonProjetos"> 
            Sobre 
            </button>
            </Link>

            <Link to='/projetos'>
            <button 
            onClick={() =>{document.title = "Projetos | Erick Mifo"}}
            className="buttonProjetos">
                 Projetos 
            </button>
            </Link>

            <Link to='/contato'>
            <button 
             onClick={() =>{document.title = "Contato | Erick Mifo"}}
            className="buttonContato"> 
            Contato 
            </button>
            </Link>

            </div>

            <div className="menu-icon" onClick={handleClick}>

            {click ? <ClearIcon /> : <DehazeIcon />}
            
          </div>
        </div>
    )
}

export default NavBar