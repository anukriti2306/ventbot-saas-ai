import React from 'react';
import { Box } from '@mui/material';
import TyperAnimation from '../components/typer/TyperAnimation';
const Home = () => {
  return <Box width={'100%'} height={'100%'}>
    <Box sx={{display:"flex", width:"100%", flexDirection:"column", alignItems:"center", mx:"auto", mt:3}}>
      <Box><TyperAnimation></TyperAnimation></Box>
      <Box sx={{
        width:"100%", 
        display:"flex",
        flexDirection:{md:"row", xs:"column", sm:"column",
        gap:5,
        my:10,
      }}}>
        <img src='home2.jpg' alt='home1' style={{width:"200px", margin:"auto"}}/>
        <img className='image-inverted rotate' src='openai.png' alt='openai' style={{width:"200px", margin:"auto"}}/>
      </Box>
      <Box sx={{display:"flex", width:"100%", mx:"auto"}}>
        <img 
        src='chatbot.png' 
        alt="chatbot" 
        style={{
          display:"flex", 
          margin:"auto", 
          width:"60%", 
          borderRadius:"40", 
          boxShadow:"-5px -5px 105px #64f3d5",
          marginTop:20,  
          marginBottom:20,
        }}/>
      </Box>
    </Box>
  </Box>
}

export default Home;