import React from 'react';
import { Container } from '@material-ui/core';
import Empleos from '../../Components/Empleos/Empleos';
import { useSelector } from 'react-redux';


const PageEmpleos = () => {


    const {empleos}=useSelector(state=>state.empleos)

    return (  
        <Container>
            <h2 style={{color:'white',position:'absolute',top:'120px',left:'20px',border:'none',width:'auto',padding:'3px 20px',fontWeight:'bold',background:'linear-gradient(450deg,crimson,rgb(220,220,220))',filter:'sepia(50%)', textShadow:'0 0 1px rgb(20,20,20),0 0 2px rgb(20,20,20),0 0 4px rgb(20,20,20)',borderRadius:'20px'}}>Empleos</h2>
            <Empleos listaEmpleos={empleos}/>
        </Container>
    );
}
 
export default PageEmpleos;