import React from 'react'
import {Box, Typography} from '@mui/material'
import PortraitIcon from '@mui/icons-material/Portrait';

export default function UserPictureProfile() {
  return (
   <>
   <Box>
    <Typography
    sx={{
        position:'relative', 
        fontFamily:'roman', 
        top:'5rem',
        left:'2%',  
        fontWeight:'bold', 
        color:'#3a2f33', 
    }}
    >
        Profile Picture
    </Typography>

    <Box
    sx={{
        position:'relative', 
        border:'1px solid #e5dfe1', 
        height:'14rem', 
        top:'5rem', 
        borderRadius:'10px', 
    }}
    >
        <PortraitIcon
        sx={{
            position:'relative', 
           fontSize:'80px',
            color:'#c7c2c8',
            top:'4rem', 
            left:'35%', 
        }}
        />

        <Typography
        sx={{
            position:'relative', 
            fontFamily:'roman', 
            top:'5rem',
            left:'26%', 
            color:'#867c88',
            fontWeight:'bold',   
        }}
        >
            Upload a profile picture
        </Typography>

    </Box>

   </Box>
   </>
  )
}
