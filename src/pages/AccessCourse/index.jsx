import { 
  Box,
  Card, 
  Typography, 
  Divider, 
  CardMedia,
  Button,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import TrueLearnLogo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Section from '../../components/AccessCourse/Section';

export default function Lecture() {
  const navigate = useNavigate();
  const [introductionTitle, setIntroductionTitle] = useState([]); 
  const [sectionTitle, setSectionTitle] = useState([]); 
  const [selectedSection, setSelectedSection] = useState('')
 

  const videoFile = useSelector(state => state.videoUrl.VideoUrl)

  const updateSectionBorder= () => {
    const IntroductionStyle = selectedSection === 'Introduction' && {border: '1px solid black'}
    const sectionStyle = selectedSection === 'Neural Network ' && {border: '1px solid black'}
    console.log(selectedSection)

    return {
  IntroductionStyle, 
  sectionStyle, 
 }
  }
  useEffect(() => {
    axios.get('/createcoursedata')
    .then((response) => setIntroductionTitle(response.data))
    .catch((error) => console.log(error))
  },[])

 useEffect(() => {
  axios.get('/sectioninput')
  .then((response) => setSectionTitle(response.data))
  .catch((error) => console.log(error))
 },[])

 const sectionStyles = sectionTitle.map((data) => {
  return selectedSection === data.section && {border: '1px solid black'} 
})

 console.log(sectionStyles)

  console.log(introductionTitle)
  console.log(sectionTitle)

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
      onClick={() => setSelectedSection('Introduction')}
      sx={{
          position:'relative', 
          border: updateSectionBorder().IntroductionStyle, 
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
              Introduction: {data.introduction}
          </Typography>
      </Card>
     ))}

   <Section
   borderStyle={sectionStyles}
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
      left:'3rem', 
      top:'10rem', 
     }}
     >
     <CardMedia
           component='img'
           height={650}
           image={`https://res.cloudinary.com/duswtno8e/image/upload/${decodeURIComponent(videoFile)}.jpg`}
           style={{objectFit:'cover'}}
           /> 
     </Box>
    </>
  )
}
