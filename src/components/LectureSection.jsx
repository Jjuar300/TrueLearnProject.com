import {Box, OutlinedInput} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleCloseSection } from '../state/createcourse/AddSectionSlice';

export default function LectureSection() {
  const closeSection = useSelector(state => state.AddSection.isSection);
  const dispatch = useDispatch(); 

    return (
    <>
    <Box
    name="section"
sx={{
    border:'1px solid black',
    width:'300px', 
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

}}
/>

<OutlinedInput
placeholder='Add a section:'
sx={{
    position:'relative', 
    height:'30px', 
    left:'10%', 
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
    </>
  )
}
