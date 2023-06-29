import React from 'react'
import SignUpButton from '../../../components/SignUpButton'
import { Typography } from '@mui/material'

export default function SignIn() {
  return (
    <SignUpButton
    name='SignInButton'
     sx={{
      left: '-1%',
      top: '300px',
      width:'200px', 
      height: '60px', 
      backgroundColor: '#faf6fe',
      border: '1px solid black'
    }}
    >
  <Typography
   color='black'
   fontSize='20px'
  >
    Sign In
  </Typography>
    </SignUpButton>
  )
}
