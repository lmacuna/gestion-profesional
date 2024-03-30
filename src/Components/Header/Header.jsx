import React from "react";
import Styles from "./EstilosHeader";
import NavBar from "../NavBar/NavBar";

const Header=()=>{


    const classes=Styles()
    return(
        <header className={classes.header}>
            <h1 className={classes.h1}>Gestion Profesional SRL</h1>  <NavBar/>
        </header>
    )
}


export default Header;