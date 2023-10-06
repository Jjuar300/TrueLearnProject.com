import React from 'react'
import {Box} from '@mui/material'
import NavBar from '../Navbar'
import Explore from './Explore'
import CourseCard from '../../components/Course/CourseCard'
import DummyCourses from './DummyCourses'

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
        <Explore/>
        <DummyCourses/>
    </Box>
    </>
  )
}