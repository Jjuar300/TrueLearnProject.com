import React from 'react'
import {Box} from '@mui/material'
import NavBar from '../Navbar'
import LearningPageSearchBar from './LearningSearchBar'

export default function ChanelPage() {
  return (
    <>
     <Box
     sx={{
      borderLeft:'none', 
      borderRight:'none', 
      borderTop:'none', 
      height:'5rem', 
     }}
     >
       <NavBar/>
      <LearningPageSearchBar/>
     </Box>
    </>
  )
}
