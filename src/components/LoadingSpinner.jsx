import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import { Box } from '@mui/material'

export default function greet() {
  return (
  <Box
  sx={{
    position:'absolute', 
    top:'52rem', 
    left:'55rem',
  }}
  >
     <MoonLoader/>
  </Box>
  )
}
