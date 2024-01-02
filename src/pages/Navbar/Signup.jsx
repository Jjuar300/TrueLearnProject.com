
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
 
  return (
  <Button
  name='SignUpButton'
  sx={{
    position:'absolute',     
    color: 'white',
    backgroundColor:'#8002a2',
    width:'60px',
    height:'30px', 
    left: isNotMobileScreen ? '70rem' :'50%',
    ":hover": {backgroundColor: '#a403cf'}, 
    borderRadius: '5px',
     top: isNotMobileScreen ? '3rem'  : '35px', 
     fontSize:'10px', 
  }}
  >
   Log out
  </Button>
  )
}
