import React from 'react'
import {Box, Typography} from '@mui/material'
import { Formik } from 'formik'
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
      left: isNotMobileScreen ? '20%' : 'none',  
     }}
     >
        Explore Courses
       </Typography>
    </>
  )
}
