import React from 'react'
import {Box, Typography} from '@mui/material'
import { Formik } from 'formik'

export default function Courses() {
  return (
    <>
     <Typography
     sx={{
      position:'absolute', 
      top:'8rem',
      fontSize:'30px', 
      fontFamily:'roman', 
      fontWeight:'bold',  
     }}
     >
        My courses
       </Typography>
    </>
  )
}
