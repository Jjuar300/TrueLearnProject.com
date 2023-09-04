import React, { useState }  from 'react'
import { Box, Button, Typography } from '@mui/material'
import NavBar from '../Navbar';
import UploadVideo from './UploadVideo';
import ClassInfo from './CourseInfo';

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
    const [isCurriculum, setCurriculum] = useState(false); 
    const [isCourseLandingpage, setCourselandingPage] = useState(false); 
    const [isCoursePrompt, setCoursePrompt] = useState(true)

  const handleCurriculumOclick = () => {
   setCurriculum(true)
   setCourselandingPage(false)
   setCoursePrompt(false)
}
  const handleCourseLandingPageOnclick = () => {
   setCourselandingPage(true)
   setCurriculum(false)
   setCoursePrompt(false)
}

    return (
   <>

<NavBar/>
{isCurriculum && <UploadVideo/>}
{isCourseLandingpage && <ClassInfo/> }
{ isCoursePrompt && CoursePrompt}

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
  onClick={handleCurriculumOclick}
   sx={{
    color:'black',
    ':hover': {cursor:'pointer'},  
   }}
   >
   Curriculum
   </Typography>
 

   <Typography
   onClick={handleCourseLandingPageOnclick}
   sx={{
    color:'black', 
    ':hover': {cursor:'pointer'},  
   }}
   >
    Course Landing page
   </Typography>

   <Button
   sx={{
    border:'1px solid black', 
    color:'white', 
    backgroundColor:'#431440', 
    ':hover': {backgroundColor:'#80267a'},  
   }}
   >
    Create Course
   </Button>
   </Box>

   </>
  )
}
