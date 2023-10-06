import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../pages/Navbar'
import { Box, Button } from '@mui/material'
import axios from 'axios';
import {Player}from 'video-react'
import 'video-react/dist/video-react.css'
import { useSelector } from 'react-redux';
import {CardMedia} from '@mui/material';

export default function BuyCourse() {

const videoFile = useSelector(state => state.videoUrl.VideoUrl)
const [data, setData] = useState([]); 

useEffect(() => {
   axios.get('/uploadCourseLandingInputValues')
  .then((response) => setData(response.data))
  .catch((error) => console.log(error))
},[]);

console.log(data)

  return (
    <>
    <NavBar/>

   {
    data.map((data) => (
      <Box
      name = 'courseTitle'
      sx={{
          position:'absolute', 
          left:'5rem',
          top:'10rem', 
          fontSize:'1.5rem', 
      }}
      >
      <h1 key={data._id} >{data.title}</h1>
      </Box>
      
    ))
   }

   {
    data.map((data) => (
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
          <p>{data.description}</p>

      </Box>
    ))
   }
  

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
{/* 
    <Player
    >
      <source  src={`https://res.cloudinary.com/duswtno8e/video/upload/${videoFile}`} />
    </Player> */}

   <CardMedia
   component='img'
   image={`https://res.cloudinary.com/duswtno8e/video/upload/${videoFile}`} 
   />


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
      Access course
    </Button>
    </>
  )
}
