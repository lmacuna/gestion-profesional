import React from 'react';
import { Container } from 'reactstrap';
import Banner from '../../Components/Banner/Banner';

const PageHome = () => {
    return (  
        <Container style={{zIndex:-1,position:'relative',display:'flex',justifyContent:'start',alignItems:'center',flexDirection:'column'}}>
            <Banner/>
        </Container>
    );
}
 
export default PageHome;