import {Box, Button, OutlinedInput} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useEffect, useMemo, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessVideo } from '../state/createcourse/VideoUrl';

export default function LectureSection({

}) {

  const dispatch = useDispatch(); 
  const styleDefault = {border:'2px solid gray'}
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
  const [isRemovebuttonclicked, setRemoveButtonClicked] = useState(true); 
  const [file, setfile] = useState(); 
  const [isDataSaved, setDataSaved] = useState();
  const [error, setError] = useState(); 
  const [FileError, setFileError] = useState(styleDefault); 

  const [sectionInput, setSectionInput] = useState({
    SectionInputValue: '', 
  }); 

  function getRemoveSection(){
    setRemoveButtonClicked(false)
    setSectionInput('')
  }

  const handleInputChange = (e) => {
    setSectionInput({...sectionInput, SectionInputValue: e.target.value})
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; 
    setfile(selectedFile)
  }

  console.log(file)
  
  //orginal endpoint is '/upload'
  const upload = () => {
    const inputValue = sectionInput.SectionInputValue; 
    const formData = new FormData(); 
    formData.append('inputValue', inputValue)
    formData.append('file', file)
    axios.post('/uploadsectiondata',formData)      
    dispatch(getAccessVideo(file.name))
   }

  const ValidateCurriculum = () => {
    const inputStyling = {border:'1px solid red'} 
    const isValid = sectionInput.SectionInputValue === ''; 
    const fileStyling = {border: '1px solid red'}
  
    if(isValid){
      setError(inputStyling)
    }else if(!file){
        setDataSaved(false); 
        setError(null); 
        setFileError(fileStyling); 
    }else{
      setDataSaved(true)
      setFileError(null)
    }
  
  }

  const handleSaveButton = () => {
    upload(); 
    ValidateCurriculum();  
  }
 
  const handleDeleteButton = () => {
    setDataSaved(null); 
    setFileError(styleDefault)
    setfile(false)
   setSectionInput({SectionInputValue: ''})
  }

  return (
    <>
   { isRemovebuttonclicked &&  
   
   <form>
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
onClick={getRemoveSection}
name='removeicon'
sx={{
    position:'absolute', 
    border:'1px solid black',
    borderRadius:'15px', 
    position:'relative',  
    left:'5%', 
    top:'1rem',  
    cursor:'pointer', 
}}
/>

{ !isDataSaved && <OutlinedInput
data-testid='outlinedInput'
placeholder='Add a section title:'
type='text'
onChange={handleInputChange}
onClick={() => setError(null)}
sx={{
    position:'relative', 
    height:'30px', 
    left:'10%', 
    width: isNotMobileScreen ? '25rem' : 'none', 
    border:error, 
}}
/
>}

{ !isDataSaved && <Box
    name='uploadvideo'
    sx={{
        position:'relative', 
      border: FileError,
      width: isNotMobileScreen ? '15rem' : '5rem',
      height:'3rem', 
      padding:'.2rem',
      left:'25%', 
      top:'40px',
      cursor:'pointer',   
      textAlign:'center', 
    }}
    >
     
     <input 
     name='file'
     type='file' 
     onChange={handleFileChange}
     onClick={() => setFileError(styleDefault)}
     />
    </Box>}

    {isDataSaved && <DoneAllIcon
sx={{
  position:'relative', 
  left:'35%', 
  fontSize:'6rem', 
  top:'2rem',
  opacity:'.4', 
}}
/>}

{ !isDataSaved ? <Button
  name='saveButton'
  onClick={handleSaveButton}
  sx={{
    position:'relative', 
   color:'black', 
   left:'2%',
   top:'3rem',  
  }}
>Save</Button>
:
<Button
onClick={handleDeleteButton}
sx={{
  position:'relative', 
 color:'black', 
 left:'-22%',
 top:'3rem',  
}}
>
  Delete
</Button>
}

</Box>
</form>
}
    </>
  )
}

