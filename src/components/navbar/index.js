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
            <button className="buttonHome"> Erick Mifo </button>
            </Link>
            <div className={click ? "nav-active" : "nav-links"}>
            <button className="buttonProjetos"> Sobre </button>
            <Link to='/projetos'>
            <button className="buttonProjetos"> Projetos </button>
            </Link>
            <Link to='/contato'>
            <button className="buttonContato"> Contato </button>
            </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
            {click ? <ClearIcon /> : <DehazeIcon />}
          </div>
        </div>
    )
}

export default NavBar