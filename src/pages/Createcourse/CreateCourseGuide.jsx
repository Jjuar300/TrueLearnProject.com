import React, { useState }  from 'react'
import { Box, Button, Typography } from '@mui/material'
import NavBar from '../Navbar';
import UploadVideo from './UploadVideo';
import CourseInfo from './CourseLandingPage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCourseLandingPage } from '../../state/createcourse/upload';

const CoursePrompt =   <Typography
sx={{
   position:'absolute', 
   left:'45%',
   top:'23rem',  
   fontSize:'2rem', 
   fontFamily:'roman'
}}
>
   Create with TrueLearn!
</Typography>

export default function CreateCourseGuide() {
    
   const dispatch = useDispatch(); 
   const navigateLandingPage= useSelector(state => state.upload.navigateCourseLandingPage)
   const isCourseLandingPage = navigateLandingPage === 'LandingPage'; 
   const isCurriculum = navigateLandingPage === 'Curriculum';

    return (
   <>

<NavBar/>
{ isCurriculum && <UploadVideo/>}

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

   </>
  )
}
