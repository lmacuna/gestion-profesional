import { Link,NavLink } from "react-router-dom";
import Styles from "./EstilosNavBar";



const NavBar=()=>{



    const classes=Styles()
    return(
        <>
        <label htmlFor="check" className="check">Menu</label>
        <input type="checkbox" id="check"></input>
      <nav className={classes.nav}>
         <Link className={classes.link} to="/gestion-profesional/">Home</Link>
         <Link className={classes.link} to="/gestion-profesional/empleos">Empleos</Link>
         <Link className={classes.link} to="/gestion-profesional/perfiles">Perfiles</Link>
         <Link className={classes.link} to="/gestion-profesional/empresas">Empresas</Link>
         <Link className={classes.link} to="/gestion-profesional/registrarse">Registrarse</Link>
         <Link className={classes.link} to="/gestion-profesional/admin">Admin</Link>
      </nav>
      </>
    )
}



export default NavBar;