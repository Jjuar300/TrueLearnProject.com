import React, { useEffect, useState } from 'react'
import NavBar from '../../pages/Navbar'
import { Box, Button } from '@mui/material'
import axios from 'axios';
import {Player}from 'video-react'
import 'video-react/dist/video-react.css'

export default function BuyCourse() {
  const [fileSource, setFileSource] = useState(); 
  
  useEffect(() => {
  axios.get('/upload')
  .then((response) => {setFileSource(response.config.url)})
  .catch(error => {console.error('Error fetching file: ', error)})
  },[])

  console.log(fileSource)

  return (
    <>
    <NavBar/>
    <Box
    name = 'courseTitle'
    sx={{
        position:'absolute', 
        left:'10rem',
        top:'10rem', 
        fontSize:'1.5rem', 
    }}
    >
    <h1>Learn Machine learning.</h1>
    </Box>

    <Box
    name = 'courseDescription'
    sx={{
        position:'absolute', 
        fontSize:'2rem', 
        top:'20rem', 
        left:'10rem', 
    }}
    >
        <p>Create cutom models to the public,<br/>
            know the ins and out of machine learning. 
        </p>
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
    
    <Player>
      <source src={fileSource} />
    </Player>

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
      Buy Course
    </Button>
    </>
  )
}
