import {Box, OutlinedInput} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleCloseSection } from '../state/createcourse/AddSectionSlice';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function LectureSection() {
  const dispatch = useDispatch(); 
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')

    return (
    <>
    <Box
    name="section"
sx={{
    border:'1px solid black',
    width: isNotMobileScreen ? '500px' : '300px', 
    height:'200px', 
}}
>

<RemoveIcon
onClick={() => dispatch(handleCloseSection())}
name='removeicon'
sx={{
    border:'1px solid black',
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
      width: isNotMobileScreen ? '10rem' : '5rem',
      height:'5rem', 
      padding:'.2rem',
      left: isNotMobileScreen ? '30%' : '35%', 
      top:'40px', 
      cursor:'pointer',  
    }}
    >
      <PlayArrowIcon
      sx={{
        position:'relative', 
        fontSize:'50px', 
        top:'10px', 
        left: isNotMobileScreen ? '30%' : '13%', 
      }}
      />

    </Box>

</Box>
    </>
  )
}
