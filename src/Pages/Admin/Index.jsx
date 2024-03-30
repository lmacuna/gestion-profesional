import React from 'react';
import { Container } from 'reactstrap';
import FormAdmin from '../../Components/FormAdmin/FormAdmin';
import Styles from '../EstilosPages';
import {  useSelector } from 'react-redux';
import Administrador from '../../Components/Administrador/Administrador';

const PageAdmin = () => {
    
    const {user}=useSelector( state => state.user) 




    const classes=Styles()
    return ( 
        <>
         <h2 style={{color:'white',position:'fixed',top:'140px',left:'20px',border:'none',width:'auto',padding:'3px 20px',fontWeight:'bold',background:'linear-gradient(450deg,crimson,rgb(220,220,220))',filter:'sepia(50%)', textShadow:'0 0 1px rgb(20,20,20),0 0 2px rgb(20,20,20),0 0 4px rgb(20,20,20)',borderRadius:'20px'}}>Admin</h2>
         <h3 style={{top:'180px',color:'white',position:'absolute'}}>Mantenimiento</h3>
         <Container className={classes.container}>
           {!user? <FormAdmin/>:<Administrador/>}
        </Container>
        </>
       
     );
}
 
export default PageAdmin;