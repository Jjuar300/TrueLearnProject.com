import React from 'react'
import {Box} from '@mui/material'
import Courses from './MyCourses'
import NavBar from '../Navbar'

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
        <Courses/>
    </Box>
    </>
  )
}
