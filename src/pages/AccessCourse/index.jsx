import { 
  Box,
  Card, 
  Typography, 
  Divider, 
  CardMedia,
  Button,
} from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import TrueLearnLogo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Section from '../../components/AccessCourse/Section';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessVideo } from '../../state/createcourse/VideoUrl';
import { getBorderStyle } from '../../state/createcourse/VideoUrl';

export default function Lecture() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [introductionTitle, setIntroductionTitle] = useState([]); 
  const [selectedSection, setSelectedSection] = useState('')
  const videoFile = useSelector(state => state.videoUrl.accessVideo) 
  const borderStyle = useSelector(state => state.videoUrl.borderStyle)

 console.log(videoFile)
  
  useEffect(() => {
    axios.get('/createcoursedata')
    .then((response) => setIntroductionTitle(response.data))
    .catch((error) => console.log(error))
  },[])

introductionTitle.map((data) => {
   if(selectedSection === data.introduction){
    dispatch(getAccessVideo(data.videofilename))
    window.location.reload()
   }
})

console.log(selectedSection)

    return (
    <>
     <img
      style={{
        cursor:'pointer', 
      }}
     onClick={() => navigate('/')}
      width='150rem'
      src={TrueLearnLogo}
      />
  
     <Box
     sx={{
      position:'absolute', 
      display:'flex', 
      flexDirection:'column', 
      flexWrap:'wrap', 
      gap:'2rem', 
     }}
     >
     {introductionTitle.map((data) => (
      <Card
      onClick={() => setSelectedSection(data.introduction)}
      sx={{
          position:'relative', 
          border: borderStyle, 
          borderRadius:'0', 
          left:'80rem',  
          width:'25rem', 
          height:'5rem',
          cursor:'pointer', 
      }}
      >
          <Typography
          sx={{
            position:'relative', 
            fontFamily:'roman', 
            fontSize:'1.5rem', 
            left:'1rem',  
            top:'1rem', 
          }}
          > 
             {data.introduction}
          </Typography>
      </Card>
     ))}

   <Section
   setSelectedSection={setSelectedSection}
   selectSection = {selectedSection}
   />

     </Box>

     <Divider 
     orientation='vertical'
     sx={{
      position:'absolute', 
      left:'78rem', 
      top:'1rem', 
     }}
     />

     <Box
     sx={{
      position:'absolute', 
      width:'70rem',  
      left:'5rem', 
      top:'10rem', 
     }}
     >
      <video 
   width={1000}
   height={660}
   controls
   >
    <source src={`https://d3n6kitjvdjlm1.cloudfront.net/${videoFile}`} type='video/mp4' />
   </video>
     </Box>
    </>
  )
}
