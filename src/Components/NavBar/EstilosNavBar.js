import { makeStyles } from "@mui/styles";


const Styles =makeStyles({

    nav:{
        width:'auto',
        height:'auto',
        padding:'10px',
        marginLeft:'auto',
        background:'rgb(245,245,245)',
        borderRadius:'20px',
        boxShadow:' 5px 10px 20px crimson',
        border:'4px solid rgb(180,180,180)',
        display:'flex',
        '@media (max-width:1052px)':{
            top:'108px',
            left:'-101%',
            position:'fixed',
            flexDirection:'column !important',
            justifyContent:'center',
            width:'100% !important',
            background:'white',
           transform:'scale(-1)',
            height:'82vh',
            transition:'all 3s !important',
            gap: '2em',
            zIndex:20
           
        },
        '@media (max-width:500px)':{
            height:'90vh'
        },
        '@media (max-width:400px)':{
            height:'83vh'
        }
    },
    link:{
        width:'auto',
        textDecoration:'none',
        color:'rgb(20,20,20)',
        margin:'0 30px 0 30px',
        fontWeight:'700',
        '&:hover':{
            color:'crimson'
        },
        '@media (max-width:1052px)':{
            color:'rgb(220,220,220) !important',
            margin:'0px auto !important',
            textShadow:'0 0 1px rgb(20,20,20),0 0 2px rgb(20,20,20),0 0 4px rgb(20,20,20)',
            width:'auto'
        }
    }

})



export default Styles;