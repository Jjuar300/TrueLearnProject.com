import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import {Formik} from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function UserDetails() {
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 

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
    left: isNotMobileScreen ? '40%' : '5%', 
    height:'1rem',   
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
   name='About me'
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
        About me 
    </Typography>

    <TextField
    multiline
        placeholder='Hi im James and...'
        type='text'
        fullWidth
        />
   </Box>
   
   <Box
   name='Company'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
   }}
   >
   <Typography
    sx={{
        position:'relative',  
        top:'1.6rem', 
        width:'5rem', 
    }}
    >
        Company 
    </Typography>

    <Typography
    sx={{ 
        position:'relative', 
        left:'77%', 
        width:'5rem', 
    }}
    >
        (Optional)
    </Typography>

    <TextField
        placeholder='ex://Google'
        type='text'
        fullWidth
        />
   </Box>

   <Box
   name='Linked'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
   }}
   >
   <Typography
    sx={{
        position:'relative',  
        top:'1.6rem', 
        width:'5rem', 
    }}
    >
        Job Title
    </Typography>

    <Typography
    sx={{ 
        position:'relative', 
        left:'77%', 
        width:'5rem', 
    }}
    >
        (Optional)
    </Typography>

    <TextField
        placeholder='ex:// Product manager'
        type='text'
        fullWidth
        />
   </Box>


   <Box
   name='Linked'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
   }}
   >
   <Typography
    sx={{
        position:'relative',  
        top:'1.6rem', 
        width:'5rem', 
    }}
    >
        Linked
    </Typography>

    <Typography
    sx={{ 
        position:'relative', 
        left:'77%', 
        width:'5rem', 
    }}
    >
        (Optional)
    </Typography>

    <TextField
        placeholder='www.linked.com/in/'
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
