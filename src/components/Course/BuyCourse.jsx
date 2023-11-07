import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../pages/Navbar'
import { Box, Button } from '@mui/material'
import axios from 'axios';
import 'video-react/dist/video-react.css'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getVideoUrl } from '../../state/createcourse/VideoUrl';

export default function BuyCourse() {

const dispatch = useDispatch(); 
const videoFile = useSelector(state => state.videoUrl.VideoUrl)
const [data, setData] = useState([]); 
const navigate = useNavigate(); 

//  useEffect(() => {
//   axios.get('/getvideofilename')
//   .then((response) => dispatch(getVideoUrl(response.data[0].fileName)))
//   .catch((error) => console.log(error))
//  },[]) 

useEffect(() => {
   axios.get('/uploadCourseLandingInputValues')
  .then((response) => setData(response.data))
  .catch((error) => console.log(error))
},[]);

console.log(videoFile)

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
