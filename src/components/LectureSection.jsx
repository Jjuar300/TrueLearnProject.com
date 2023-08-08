import {Box, OutlinedInput,Typography} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleSection } from '../state/createcourse/AddSectionSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';

export default function LectureSection() {
  const dispatch = useDispatch(); 
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')

  return (
    <>
    <Box
    name="section"
sx={{
    border:'1px solid black',
    borderRadius:'15px', 
    width: isNotMobileScreen ? '500px' : '300px', 
    height:'200px', 
}}
>

<RemoveIcon
onClick={() => dispatch(handleSection({isSection:false}))}
name='removeicon'
sx={{
    border:'1px solid black',
    borderRadius:'15px', 
    position:'relative',  
    left:'5%', 
    top:'7px',  
    cursor:'pointer', 
}}
/>

<OutlinedInput
placeholder='Add a section title:'
sx={{
    position:'relative', 
    height:'30px', 
    left:'10%', 
    width: isNotMobileScreen ? '25rem' : 'none'
}}
/
>


 
<Box
    name='uploadvideo'
    sx={{
        position:'relative', 
      border:'2px solid gray',
      width: isNotMobileScreen ? '15rem' : '5rem',
      height:'3rem', 
      padding:'.2rem',
      left:'25%', 
      top:'40px',
      cursor:'pointer',   
      textAlign:'center', 
    }}
    >

      <AddIcon
      sx={{
        position:'absolute', 
        left:'4%'
      }}
      />
     <Typography
     sx={{
      position:'absolute', 
      top:'.5rem', 
      left:'30%', 
     }}
     >
      Add Content
     </Typography>

    </Box>
</Box>
    </>
  )
}
