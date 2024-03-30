import { Link,NavLink } from "react-router-dom";
import Styles from "./EstilosNavBar";



const NavBar=()=>{



    const classes=Styles()
    return(
        <>
        <label htmlFor="check" className="check">Menu</label>
        <input type="checkbox" id="check"></input>
      <nav className={classes.nav}>
         <Link className={classes.link} to="/">Home</Link>
         <Link className={classes.link} to="/empleos">Empleos</Link>
         <Link className={classes.link} to="/perfiles">Perfiles</Link>
         <Link className={classes.link} to="/empresas">Empresas</Link>
         <Link className={classes.link} to="/registrarse">Registrarse</Link>
         <Link className={classes.link} to="/admin">Admin</Link>
      </nav>
      </>
    )
}



export default NavBar;