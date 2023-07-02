import React, { useEffect, useState } from 'react'
import { Box, Paper, Typography} from '@mui/material'
import LearnImage1 from '../../assets/linkedin-sales-solutions-1LyBcHrH4J8-unsplash.jpg'
import LearnImage2 from '../../assets/samantha-borges-EeS69TTPQ18-unsplash.jpg'
import LearnImage3  from '../../assets/emmanuel-ikwuegbu-MSX3O-Sqa8U-unsplash.jpg'
import {AspectRatio} from 'react-aspect-ratio'
import SimpleImageSlider from 'react-simple-image-slider'
import Descriptions from './DescriptionForImage'

export default function SliderImage() {
    
  
    const setimages = [
        { url: LearnImage1}, 
        { url: LearnImage2}, 
        { url: LearnImage3}
    ]
    
    const styleImage = {
        width:'370px', 
        height: '260px',
    }


   
  return (
   
    <Box sx={{ position:'absolute', top:'80px'}}>
        <SimpleImageSlider 
        width={370}
        height={260}
        images={setimages}
        autoPlay={true}
        autoPlayDelay={3}
        />  
          <Descriptions></Descriptions>
    </Box>
  )
}
