import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../pages/Navbar'
import { Box, Button } from '@mui/material'
import 'video-react/dist/video-react.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function BuyCourse() {

const videoFile = useSelector(state => state.videoUrl.VideoUrl)
const navigate = useNavigate(); 
const userId = useSelector(state => state.userData.userId)
const courseTitle = useSelector(state => state.CourseData.title)
const courseDescription = useSelector(state => state.CourseData.description)

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
      <h1 key={userId} >{courseTitle}</h1>
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

      <video 
      width={640}
      height={360}
      controls
      onError={(e) => console.error('video Error: ', e)}
      >                                                   
       <source src={`https://d3n6kitjvdjlm1.cloudfront.net/${videoFile}`} type='video/mp4' />
      </video>
    </Box>

    <Button
    onClick={() => navigate('/accesslecture')}
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
