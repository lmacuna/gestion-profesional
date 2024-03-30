import { makeStyles } from "@mui/styles";


const Styles=makeStyles({
    header:{
        width:'100%',
        padding:'15px',
        height:'auto',
        border:'none',
        display:'flex',
        justifyContent:'start',
        alignItems:'center',
        paddingLeft:'20px',
        position:'fixed !important',
        background:'linear-gradient(450deg,crimson,rgb(245,245,245))',
        filter:'sepia(50%)',
        marginBottom:'20px',
        '@media(max-width:900px)':{
            flexDirection:'column !important',
            padding:'15px 2px 15px 2px !important',
            height:'110px'
        }
      
    },
    h1:{
        color:'white',
        textShadow:'0 0 1px rgb(20,20,20),0 0 2px rgb(20,20,20),0 0 4px rgb(20,20,20)',
        '&::first-Letter':{
            fontWeight:'bold',
            color:'orange !important',
            fontSize:'50px',
            '@media (max-width:1052px)':{
                fontSize:'2em'
               } 
        },
        '@media (max-width:1052px)':{
            fontSize:'1em'
           } 
    }
})


export default Styles;