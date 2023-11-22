import React from 'react'
import SignUpButton from '../../../components/SignUpButton'
import { Typography } from '@mui/material'
import { handleClose } from '../../../state/CancelButtonSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function SignIn() {
 const dispatch = useDispatch(); 
 const navigate = useNavigate(); 

  return (
    <SignUpButton
    onClick={() => {navigate('/signin'); dispatch(handleClose())}}
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
