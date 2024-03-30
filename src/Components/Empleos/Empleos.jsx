import React, { useEffect} from 'react';
import { servicios } from '../../Services/Services';
import { useDispatch, useSelector } from 'react-redux';
import { setEmpleos } from '../../store/slices/empleos';



const Empleos = ({listaEmpleos}) => {
    console.log(listaEmpleos)
    //const [losEmpleos,setLosEmpleos]=useState(null)
    const {user}=useSelector(state=> state.user)
    const dispatch=useDispatch()
    const getEmpleos=async()=>{
        var data,token,metodo,url;
        token=user
         metodo='GET'
         url='https://appi-kiura.onrender.com/empleos'
       var res=await servicios(data,metodo,url,token)


       return(console.log(res.data),dispatch(setEmpleos(res.data)))
    }

   


    useEffect(()=>{
        getEmpleos()
    },[])
    return (
   <>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'200px',width:'100%',height:'auto',textAlign:'left'}}>
            {listaEmpleos?listaEmpleos.map(unEmpleo=>(
                
                <div key={unEmpleo.id} style={{width:'800px',height:'auto',background:'white',border:'4px solid grey',padding:'7px',borderRadius:'20px'}}>
                    <p style={{color:'rgb(20,20,20)',fontSize:'20px',fontWeight:'bold',width:'100%',height:'auto'}}>{unEmpleo.titulo}</p>
                    <p style={{color:'rgb(20,20,20)',fontSize:'16px',fontWeight:'bold',width:'100%',height:'auto'}}>{unEmpleo.empresa}</p>
                    <p style={{color:'rgb(20,20,20)',fontSize:'14px',fontWeight:'bold',width:'100%',height:'auto'}}>{unEmpleo.descripcion}</p>
                    <p style={{color:'rgb(20,20,20)',fontSize:'14px',fontWeight:'bold',width:'100%',height:'auto'}}>{unEmpleo.requisitos}</p>
                    <p style={{color:'rgb(20,20,20)',fontSize:'14px',fontWeight:'bold',width:'100%',height:'auto'}}>{unEmpleo.horario}</p>
                    <p style={{color:'rgb(20,20,20)',fontSize:'14px',fontWeight:'bold',width:'100%',height:'auto'}}>{unEmpleo.beneficios}</p>
                    <p style={{display:'flex',justifyContent:'center',alignItems:'center'}}><button style={{margin:'auto',padding:'2px 7px'}}>aplicar</button></p>
                </div>

            )):null}
          </div>
   </>
      );
}
 
export default Empleos;