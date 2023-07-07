import React from 'react'
import {Box, Typography, OutlinedInput, TextField, Button} from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Formik } from 'formik';

const Catergories = [
  {
    value:'Artificial Inteligence',
    label:'Artificial Inteligence',  
  }, 
  {
    value:'Product Management', 
    label:'Product Management', 
  }, 
  {
    value:'Robotics', 
    label:'Robotics', 
  }, 
  {
    value:'Graphic design', 
    label:'Graphic design', 
  }, 
  {
    value:'Engineering', 
    label:'Engineering', 
  }
]

export default function ClassInfo() {
  return (
   <>
     <Formik>
      <form>
      <Box
     name='courseoverview'
     sx={{
      position:'absolute', 
      display:'flex', 
      flexDirection:'column',
      flexWrap:'wrap',  
      gap:'1rem', 
      top:'30px', 
      left:'5%', 
     }}
     >
      <Typography variant='h5'>
        Course Overview
      </Typography>
      <Typography>
        Add course details to help learn 
        more about your course. 
      </Typography>
     </Box>

     <Box
     name="details"
     sx={{
      position:'absolute',
      display:'flex', 
      flexDirection:'column', 
      top:'12rem',
      left:'8%',
      gap:'2rem', 
      flexWrap:'wrap',  
     }}
     >
      <Box
      sx={{ 
        top:'12rem', 
        left:"10%", 
      }}
      >
        <Typography
        sx={{
          fontWeight:'bold', 
          color:'#453d43', 
        }}
        >
          Course Title
        </Typography>

        <OutlinedInput
        placeholder='My course'
        sx={{
          width:'20rem', 
          height:'2rem', 
        }}
        />

      </Box>

      <Box
      >
        <Typography
        fontWeight='bold'
        >
          Course description
        </Typography>

        <TextField
        placeholder='This course...' 
        multiline
        sx={{
          width:'20rem',
        }}
        />
      </Box>

      <Box
      >
        <TextField
        select
        label='select'
        defaultValue='choose'
        >

        </TextField>
      </Box>

     </Box>
      </form>
     </Formik>

   </>
  )
}
