import React from 'react'
import SignUpButton from '../../../components/SignUpButton'
import { Typography } from '@mui/material'

export default function SignUp() {

  return (
    <SignUpButton
    name='SignUpButton'
    sx={{
      left: '-1%',
      top: '260px',
      width:'200px', 
      height: '60px', 
      border: '1px solid black'
    }}
    >
       <Typography
   color='white'
   fontSize='20px'
   >
       Sign Up
   </Typography>
    </SignUpButton>
  )
}



