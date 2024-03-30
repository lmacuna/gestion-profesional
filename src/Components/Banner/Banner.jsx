import React from 'react';
import { Container } from 'reactstrap';
import Carrusel from '../Carousel/Carousel';
import Styles from './EstilosBanner';


const Banner = () => {


    const classes=Styles()

    return (
        
        <Container className={classes.banner}>
               <h2 style={{color:'white',position:'realtive',top:'100px',left:'20px',border:'none',width:'auto',padding:'3px 20px',fontWeight:'bold',background:'linear-gradient(450deg,crimson,rgb(220,220,220))',filter:'sepia(50%)', textShadow:'0 0 1px rgb(20,20,20),0 0 2px rgb(20,20,20),0 0 4px rgb(20,20,20)',borderRadius:'20px'}}>Home</h2>
            <Carrusel/>
        </Container>
        
      );
}
 
export default Banner;