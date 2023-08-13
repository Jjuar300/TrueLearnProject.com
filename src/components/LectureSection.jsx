import {Box, Button, OutlinedInput,Typography} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleSection } from '../state/createcourse/AddSectionSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import UploadContent from './UploadContent'
import axios from 'axios';
import { updateInputValue } from '../state/createcourse/InputSlice';

const SectionsAddIcon = <AddIcon
sx={{
  position:'absolute', 
  left:'4%'
}}
/>;

const SectionsTextContent = <Typography
sx={{
 position:'absolute', 
 top:'.5rem', 
 left:'30%', 
}}
>
 Add Content
</Typography>; 

const SectionItems = [SectionsAddIcon, SectionsTextContent]

export default function LectureSection({
  inputValues, 
  onChangeFunction, 
  handleSubmitForm
}) {
  const SectionValue = useSelector(state => state.Input.inputValue)
  const dispatch = useDispatch(); 
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
  const [isRemovebuttonclicked, setRemoveButtonClicked] = useState(true); 
 
 const handleSectionChange = (event) => {
  dispatch(updateInputValue(event.target.value))
 }

  function getRemoveSection(){
    setRemoveButtonClicked(false)
  }

  return (
    <>
       
  <form
  onSubmit={handleSubmitForm}
  >
  { isRemovebuttonclicked && <Box
    name="section"
sx={{
    border:'1px solid black',
    borderRadius:'15px', 
    width: isNotMobileScreen ? '500px' : '300px', 
    height:'200px', 
}}
>

<RemoveIcon
onClick={getRemoveSection}
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
type='text'
value={SectionValue}
onChange={handleSectionChange}
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
      <UploadContent 
      height={'4rem'}
      Icons={[...SectionItems]}
      />

    </Box>
</Box>}
  </form>
    </>
  )
}
