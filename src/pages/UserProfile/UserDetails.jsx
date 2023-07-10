import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import {Formik} from 'formik'


export default function UserDetails() {
  return (
  <>
  <Formik>
    <form>
    <Box
   name='userDetails'
   sx={{
    position:'absolute', 
    display:'flex', 
    flexDirection:'column',
    gap:'2rem', 
    top:'30rem',
    left:'5%',   
   }}
   >
   
   <Box
   name='firstname'
   sx={{ 
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',  
   }}
   >
   <Typography
    sx={{
        top:'30rem', 
    }}
    >
        Full Name
    </Typography>

    <TextField
    fullWidth
        placeholder='James smith'
        type='text'
        />
   </Box>

   <Box
   name='email'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',  
   }}
   >
   <Typography
    sx={{
        top:'30rem', 
    }}
    >
        Email
    </Typography>

    <TextField
    fullWidth
        placeholder='James205@gmail.com'
        type='email'
        />
   </Box>

   <Box
   name='jobtitle'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',  
   }}
   >
   <Typography
    sx={{
        top:'30rem', 
    }}
    >
        Job title
    </Typography>

    <TextField
    fullWidth
        placeholder='Engineer'
        type='text'
        />
   </Box>


   <Box
   name='About me'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
    height:'10rem',  
   }}
   >
   <Typography
    sx={{
        top:'30rem', 
    }}
    >
        About me 
    </Typography>

    <TextField
    multiline
        placeholder='Hi im James and...'
        type='text'
        fullWidth
        />
   </Box>
   

   </Box>
    </form>
  </Formik>
  </>
  )
}
