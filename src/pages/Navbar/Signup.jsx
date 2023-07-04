
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SignUpButton from '../../components/SignUpButton'

export default function SignUp() {
  return (
  <Button
  name='SignUpButton'
  sx={{
    position:'absolute', 
    color: 'white',
    backgroundColor:'#8002a2',
    width:'60px',
    height:'30px', 
    left:'50%',
    ":hover": {backgroundColor: '#a403cf'}, 
    borderRadius: '5px',
     top:'35px', 
  }}
  >
        <Typography
   sx={{
    fontSize:'10px', 
   }}
    >
       SIGN UP
    </Typography>  
  </Button>
  )
}
