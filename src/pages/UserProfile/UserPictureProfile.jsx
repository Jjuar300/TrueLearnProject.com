import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import PortraitIcon from '@mui/icons-material/Portrait';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function UserPictureProfile() {
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 

  return (
   <>
   <Box
   classname='box'
   sx={{
    display:'flex', 
    flexDirection:'column', 
   }}
   >
    <Box
    sx={{
        position:'relative', 
        border:'1px solid #e5dfe1', 
        height:'14rem', 
        top:'5rem', 
        borderRadius:'10px', 
        display:'flex', 
        flexDirection:'column', 
        cursor:'pointer', 
    }}
    >

<Typography
    sx={{
        position:'relative', 
        fontFamily:'roman', 
        top:'-2rem',
        left:'2%',  
        fontWeight:'bold', 
        color:'#3a2f33', 
    }}
    >
        Profile Picture
    </Typography>

        <PortraitIcon
        sx={{
            position:'relative', 
           fontSize:'80px',
            color:'#c7c2c8',
            top:'4rem', 
            left: isNotMobileScreen ? '47%' : '35%', 
        }}
        />

        <Typography
        sx={{
            position:'relative', 
            fontFamily:'roman', 
            top:'5rem',
            left: isNotMobileScreen ? '45%' : '26%', 
            color:'#867c88',
            fontWeight:'bold',
            width:'11rem',    
        }}
        >
            Upload a profile picture
        </Typography>
    </Box>

    <Button
     sx={{
      backgroundColor:'#423642',
      color:'white', 
      top:'6rem',
      ':hover': {backgroundColor:'#5f4d5e'} 
     }}
     >
      Cancel
     </Button>

   </Box>

   </>
  )
}
