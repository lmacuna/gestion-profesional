import { makeStyles } from "@mui/styles";


const Styles=makeStyles({
    form:{
        width:'22em',
        height:'22em',
        background:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        filter:'sepia(30%)',
        position:'relative',
        zIndex:1
       
    },
    input:{
         /*   border:'1px solid grey', */
           color:'black',
           fontWeight:'bold',
           fontSize:'14px',
           marginBottom:'10px',
           padding:'3px 7px',
           width:'18em',
           textAlign:'center',
         
    },
    btnForm:{
        padding:'3px 7px',
        background:'rgb(89,89,89)',
        color:'white',
        marginTop:'30px',
        border:'none',
        borderRadius:'4px'
    }
})




export default Styles;