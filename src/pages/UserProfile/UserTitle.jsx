import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function UserInfo({
    handleSaveButton, 
    isInput, 
}) {
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 

  return (
   <>

    <Box
    name='usertitle'
    sx={{
        position:'relative',  
        border:'1px solid #f2eeef', 
        height:'5rem', 
        width: isNotMobileScreen ? '80rem' : '20rem',
        left: isNotMobileScreen ? '15%' : '5%',
        borderLeftStyle:'hidden',
        borderRightStyle:'hidden', 
    }}
    >
        <Typography
        sx={{
            position:'relative', 
            fontFamily:'roman', 
            fontSize:'25px', 
            left: isNotMobileScreen ? '35%' : '5%', 
            top:'10px', 
            color:'#3a2f33', 
        }}
        >
            Edit your Profile
        </Typography>
        <Typography
        sx={{
            position:'relative', 
            fontFamily:'roman', 
            fontSize:'17px', 
            top:'13px', 
            left: isNotMobileScreen ? '35%' : '5%', 
            color:'#3a2f33', 
        }}
        >
            This will be share with others. 
        </Typography>

        <Button
        disabled={isInput}
        onClick={handleSaveButton}
        sx={{
            border:'1px solid gray', 
            position:'relative', 
            left:'74%',
            top:'-40px',
            backgroundColor:'#8002a2', 
            color:'white',
            ':hover':{backgroundColor:'#a403cf'}   
        }}
        >
            Save
        </Button>

   </Box>
   
   </>
  )
}
