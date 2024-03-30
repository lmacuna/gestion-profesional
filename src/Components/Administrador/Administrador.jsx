import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import { setUser } from '../../store/slices/users';
import Styles from './EstilosAdmin';
import { servicios } from '../../Services/Services';

const Administrador = () => {

const dispatch=useDispatch()
const {user}=useSelector(state=> state.user)


const agregarOferta=async(e)=>{
    e.preventDefault()

    const data=new FormData(e.currentTarget)
    var token=user;
    

   

     const enviar=async()=>{
      var metodo='POST'
       var url='https://appi-kiura.onrender.com/empleo'
              var res=await servicios(data,metodo,url,token)

              return (console.log(res),alert(res.data))
     }


     enviar()


    

}




const classes=Styles()
    return ( 

        <Container>
            
                        
                <Container style={{zIndex:1,position:'relative'}}>
                       <button onClick={()=>dispatch(setUser(""))}>Cerrar modo Admin</button>
                       <form className={classes.form} onSubmit={(e)=>agregarOferta(e)}>

                        <input className={classes.titulo} type="text" name='titulo' required placeholder='completar titulo o puesto de oferta'/>
                        <input className={classes.empresa} type="text" name='empresa' required placeholder='completar empresa'/>
                        <input className={classes.descripcion} type="text" name='descripcion' required placeholder='completar descripcion'/>
                        <input className={classes.requisitos} type="text" name='requisitos' required placeholder='completar requisitos'/>
                        <input className={classes.horario} type="text"  name='horario' required placeholder='completar horario'/>
                        <input className={classes.beneficios} type="text"  name='beneficios' required placeholder='completar beneficios'/>
                        <input type="submit" value="Agregar oferta" />
                       </form>
                      
                </Container>

        </Container>
     );
}
 
export default Administrador;