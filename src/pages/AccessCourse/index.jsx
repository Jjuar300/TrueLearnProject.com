import { 
  Box,
  Card, 
  Typography, 
  Divider, 
} from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import TrueLearnLogo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Section from '../../components/AccessCourse/Section';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessVideo } from '../../state/createcourse/VideoUrl';
import ReactPlayer from 'react-player'

export default function Lecture() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [introductionTitle, setIntroductionTitle] = useState([]); 
  const [selectedSection, setSelectedSection] = useState('')
  const videoFile = useSelector(state => state.videoUrl.accessVideo) 

 console.log(videoFile)
  
  useEffect(() => {
    axios.get('/createcoursedata')
    .then((response) => setIntroductionTitle(response.data))
    .catch((error) => console.log(error))
  },[])

introductionTitle.map((data) => {
   if(selectedSection === data.introduction){
    dispatch(getAccessVideo(data.videofilename))
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
          border: selectedSection === data.introduction && '1px solid black', 
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
      left:'2.5rem', 
      top:'10rem', 
     }}
     >
   <ReactPlayer 
    width='100%'
    height='100%'
   controls
   url={`https://d2tzetpgtg6u5l.cloudfront.net/${videoFile}`}/>
     </Box>
    </>
  )
}
