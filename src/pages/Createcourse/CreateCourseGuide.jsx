import React, { useState }  from 'react'
import { Box, Button, Typography } from '@mui/material'
import NavBar from '../Navbar';
import CourseInfo from './CourseLandingPage';
import Curriculum from './Curriculum';

export default function CreateCourseGuide() { 

   const [segment, setSegment] = useState('Curriculum'); 
   const isCourseLandingPage = segment === 'LandingPage'; 
   const isCurriculum = segment === 'Curriculum';

    return (
   <>

<NavBar/>
{ isCurriculum && <Curriculum setSegment={setSegment} />}

{isCourseLandingPage && <CourseInfo/> }

   <Box
   sx={{
    position:'absolute', 
    display:'flex', 
    flexDirection:'column', 
    gap:'2rem',
    left:'25rem', 
    top:'14rem', 
   }}
   >
 
  <Typography
   sx={{
    color:'black',
    ':hover': {cursor:'pointer'},  
    opacity: isCurriculum ? null : '.4', 

   }}
   >
   Curriculum
   </Typography>
 
   <Typography
   sx={{
    color:'black', 
    ':hover': {cursor:'pointer'},
    opacity: isCourseLandingPage ? null : '.4', 
   }}
   >
    Course Landing page
   </Typography>
   </Box>


  { isCurriculum && <Button
  onClick={() => window.location.reload()}
   sx={{
    position:'absolute', 
    top:'22rem', 
    left:'25.2rem', 
    border:'1px solid black', 
    color:'white', 
    backgroundColor:'#431440', 
   ':hover': {backgroundColor:'#431440'},
    opacity:'.4',   
   }}
   >
    Publish
   </Button>}
   </>
  )
}
