
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SignUpButton from '../../components/SignUpButton'

export default function SignUp() {
  return (

 <SignUpButton
 name='SignUpButton'
 sx={{
  top: '-6px'
 }}
 >
 <Typography
 color='white'
 fontSize='10px'
 >
     Sign Up
 </Typography>
 </SignUpButton>
  )
}
