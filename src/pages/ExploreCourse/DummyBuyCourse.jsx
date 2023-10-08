import NavBar from '../../pages/Navbar'
import { Box, Button, Typography } from '@mui/material'
import {Player}from 'video-react'
import 'video-react/dist/video-react.css'
import { userCourses } from '../../data/courses';
import { useSelector } from 'react-redux';
import {
  Card, 
  CardMedia
} from '@mui/material';

export default function BuyCourse() {
const courseTitle = useSelector(state => state.DummyCourse.title); 
const courseDescription = useSelector(state => state.DummyCourse.description); 
const coursePrice = useSelector(state => state.DummyCourse.price); 
const courseImage = useSelector(state => state.DummyCourse.image); 

console.log(courseTitle)

  return (
    <>
    <NavBar/>

      <Box
      name = 'courseTitle'
      sx={{
          position:'absolute', 
          left:'5rem',
          top:'10rem', 
          fontSize:'1.5rem', 
      }}
      >
      <h1 >{courseTitle}</h1>
      </Box>
 
      <Box
      name = 'courseDescription'
      sx={{
          position:'absolute', 
          fontSize:'2rem', 
          top:'20rem', 
          left:'5rem', 
          whiteSpace:'nowrap', 
      }}
      >
          <p>{courseDescription}</p>

      </Box>
 
  

    <Box
    name = 'coursePreviewVideo'
    sx={{
      position:'absolute',
       width:'50rem', 
       height:'30rem', 
       left:'50rem', 
       top:'15rem', 
    }}
    >
  
 <Card>
 <CardMedia
    component='img'
    image={courseImage}
    height='400'
    style={{objectFit:'cover'}}
    />
 </Card>

    </Box>

    <Button
    sx={{
      position:'absolute', 
      border:'1px solid black', 
      backgroundColor:'#3e0460', 
      color:'white', 
      top:'35rem',
      left:'16rem',
      width:'13rem',
      height:'3rem',    
      ':hover': {backgroundColor:'#560687'},
    }}
    >
    Buy course
    </Button>

    <Typography
    sx={{
      position:'absolute', 
      top:'35rem',
      fontSize:'2rem',
      left:'7rem',  
    }}
    >
      ${coursePrice}
    </Typography>
    </>
  )
}
