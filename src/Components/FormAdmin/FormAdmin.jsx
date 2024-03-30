import React from 'react';
import Styles from './EstilosFormAdmin';
import { useDispatch} from 'react-redux';
import {setUser} from '../../store/slices/users';
import { servicios } from '../../Services/Services';



const FormAdmin = () => {

    const dispatch=useDispatch()

   const enviar=async(e)=>{

    e.preventDefault()

        const data=new FormData(e.currentTarget)
        var token,res;
        var metodo='POST'
        var url='https://appi-kiura.onrender.com/admin'

        res=await servicios(data,metodo,url,token)

        return (res.data?dispatch(setUser(res.data)):(console.log(res),alert(res.message)))
   }
    const classes=Styles()
    return ( 
        <><span style={{color:'white',fontWeight:'bold',background:'crimson',padding:'3px 7px', borderRadius:'20px'}}>lucas 12345</span>
        <form  style={{zIndex:1,position:'relative'}}  className={classes.form} onSubmit={(e)=>enviar(e)}>
            <input autoFocus className={classes.input} type="text" name='user' placeholder='completar usuario' required/>
            <input className={classes.input} type="text" name='password' placeholder='completar contrasenia' required/>
            <input className={classes.btnForm} type="submit" value="SIGN IN" />
        </form>
        </>
     );
}
 
export default FormAdmin;
