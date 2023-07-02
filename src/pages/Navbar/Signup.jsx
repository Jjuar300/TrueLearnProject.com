
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SignUpButton from '../../components/SignUpButton'

export default function SignUp() {
  return (
      <Typography
    sx={{
      position:'absolute', 
      color: 'white',
      backgroundColor:'#09469c',
      width:'50px',
      height:'20px', 
      left:'50%',
      ":hover": {backgroundColor: '#0d68e7'}, 
      borderRadius: '5px',
       textAlign:'center', 
       fontSize:'10px',
    }}
    >
       SIGN UP
    </Typography>  
  )
}
