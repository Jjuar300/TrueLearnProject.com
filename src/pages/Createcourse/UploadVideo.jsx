import React, { useState } from 'react'
import {Button, Typography, Box, OutlinedInput} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LectureSection from '../../components/LectureSection';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenSection } from '../../state/createcourse/AddSectionSlice';
import { handleSwitch } from '../../state/createcourse/indexSlice';

export default function UploadVideo() {
  const openSection = useSelector(state => state.AddSection.isSection)
  const dispatch = useDispatch(); 
  return (
    <>

    <Box
    sx={{
        position:'absolute', 
        top:'5px',
        display:'flex',
        flexDirection:'column', 
        justifyItems:'center',  
        gap:'1rem',
        left:'7%', 
        flexWrap:'wrap',   
    }}
>
<Typography
            sx={{
                fontSize:'30px', 
                fontWeight:'bold', 
                color:'#22033c', 
                fontFamily:'roman', 
            }}
            >Upload Videos</Typography>

        <Typography
        sx={{
          fontfamily:'roman', 
          color:'#463e3e', 
        }}
        >

            Each video must averages between 30-60 minutes of 
            running time.  
        </Typography>
    </Box>

    <Button
    onClick={() => dispatch(handleSwitch())}
    sx={{
      position:'relative', 
      border:'1px solid gray', 
      fontSize:'15px', 
      width:'20rem',
      height:'1.5rem',  
      backgroundColor:'black', 
      color:'white', 
      top:'120px', 
      left:'4%', 
      ':hover': {backgroundColor: 'gray'}, 
    }}
    >
      Save
    </Button>

   <Box
   sx={{
    position:'absolute', 
    display:'flex', 
    flexDirection:'column', 
    gap:'2rem',
    flexWrap:'wrap', 
    top:'170px', 
    left:'8%',  
   }}
   >
   <Box
    sx={{
      border:'1px solid gray', 
      display:'flex',  
      justifyContent:'center', 
      padding:'3rem',  
      backgroundColor:'#f7f6f6',
      color:'gray', 
      top:'200px', 
      left:'12%', 
    }}
    >  

<Typography
sx={{
    position:'absolute', 
    top:'5px', 
}}
>
        Upload a preview video here. 
      </Typography>
    <Box
    name='previewvideo'
    sx={{
      border:'2px solid gray',
      width: '10rem',
      height:'4rem', 
      padding:'.5rem', 
    }}
    >

      <PlayArrowIcon
      sx={{
        position:'absolute', 
        fontSize:'5rem', 
        top:'55px',
        left:'36%',  
      }}
      />

    </Box>
    </Box>

    <Box
    name="introduction"
sx={{
    border:'1px solid black',
    width:'300px', 
    height:'200px',  
}}
>

<OutlinedInput
placeholder='Introduction:'
sx={{
    position:'relative', 
    height:'30px', 
    left:'12%', 
    top:'20px', 
}}
/
>
   
  <Box
    name='uploadvideo'
    sx={{
        position:'relative', 
      border:'2px solid gray',
      width: '5rem',
      height:'5rem', 
      padding:'.2rem',
      left:'35%', 
      top:'40px',  
    }}
    >
      <PlayArrowIcon
      sx={{
        position:'relative', 
        fontSize:'50px', 
        top:'10px', 
        left:'13%', 
      }}
      />

    </Box>

</Box>

{openSection &&
<LectureSection></LectureSection>
}

<Box
onClick={() => dispatch(handleOpenSection()) }
name='addsection'
sx={{
  position:'relative', 
  border:'1px solid gray', 
  padding:'.3rem', 
  top:'-15px', 
}}
>
<AddIcon
    name="addicon"
    sx={{
        position:'relative', 
        border:'1px solid black', 
        fontSize:'30px', 
        top:'3px',
        left:'42%',  

    }}
    />
</Box>

   </Box>
    </>
  )
}
