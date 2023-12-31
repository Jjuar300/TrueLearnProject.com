
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
  const navigate = useNavigate(); 
 
  return (
  <Button
  onClick={() => navigate('/signup')}
  name='SignUpButton'
  sx={{
    position:'absolute', 
    color: 'white',
    backgroundColor:'#8002a2',
    width:'60px',
    height:'30px', 
    left: isNotMobileScreen ? '65%' :'50%',
    ":hover": {backgroundColor: '#a403cf'}, 
    borderRadius: '5px',
     top: isNotMobileScreen ? '40px'  : '35px', 
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
