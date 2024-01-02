import React from 'react'
import {Box, Button} from '@mui/material'
import Courses from './MyCourses'
import NavBar from '../Navbar'
import CourseCard from '../../components/Course/CourseCard'

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
        <Box
        sx={{
          position:'absolute', 
          display:'flex',
          flexWrap:'wrap', 
          gap:'2rem', 
          width:'100rem', 
          top:'16rem',  
          left:'-26rem', 
          justifyContent:'center', 
        }}
        >
        <CourseCard/>
        </Box>
    </Box>
    </>
  )
}
