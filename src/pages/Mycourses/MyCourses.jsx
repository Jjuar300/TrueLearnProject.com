import React from 'react'
import {Box, Typography} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'


export default function Courses() {
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)');


  return (
    <>
     <Typography
     sx={{
      position:'absolute', 
      top: isNotMobileScreen ? '10rem' : '8rem',
      fontSize:'30px', 
      fontFamily:'roman', 
      fontWeight:'bold', 
      left: isNotMobileScreen ? '13%' : 'none',  
     }}
     >
        My courses
       </Typography>
    </>
  )
}
