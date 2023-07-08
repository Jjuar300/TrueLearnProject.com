import React from 'react'
import {Box, Typography, Button} from '@mui/material'

export default function UserInfo() {
  return (
   <>

    <Box
    name='usertitle'
    sx={{
        position:'relative', 
        border:'1px solid #f2eeef', 
        height:'5rem', 
        width:'20rem',
        left:'5%',
        borderLeftStyle:'hidden',
        borderRightStyle:'hidden', 
    }}
    >
        <Typography
        sx={{
            position:'relative', 
            fontFamily:'roman', 
            fontSize:'25px', 
            left:'5%', 
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
            left:'5%',
            color:'#3a2f33', 
        }}
        >
            This will be share with others. 
        </Typography>

        <Button
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
