import React from 'react'
import SignUpButton from '../../../components/SignUpButton'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { handleClose } from '../../../state/CancelButtonSlice'
import { useDispatch } from 'react-redux'

export default function SignUp() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 


  return (
    <SignUpButton
    onClick={() => {navigate('/signup'); dispatch(handleClose())}}
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



