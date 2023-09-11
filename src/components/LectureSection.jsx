import {Box, Button, OutlinedInput} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateFileName } from '../state/createcourse/VideoContent';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function LectureSection({

}) {

  const styleDefault = {border:'2px solid gray'}
  

  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
  const [isRemovebuttonclicked, setRemoveButtonClicked] = useState(true); 
  const [file, setfile] = useState(); 
  const [fileName, setFileName] = useState(); 
  const [isDataSaved, setDataSaved] = useState(true);
  const [error, setError] = useState(); 
  const [FileError, setFileError] = useState(styleDefault); 
  
  const dispatch = useDispatch(); 
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
    const fileName = selectedFile.name; 
    setfile(selectedFile)
    setFileName(fileName)
  }

  const validateInputValues = () => {
    const isSaved = false; 
    const notSaved = true; 
    const Styling = {border:'1px solid red'}  
    const isValid = sectionInput.SectionInputValue !== ''; 

    
if(isValid){
  setDataSaved(isSaved);
  setError(null);
}else{
  setDataSaved(notSaved);
  setError(Styling); 
};

  }

  const validateFile = () => {
    const styling = {border: '1px solid red'}
  
    if(!fileName){
    setFileError(styling) 
    setDataSaved(true)
   }else{
    setDataSaved(false)
   }
  }; 

  const upload = () => {
    const formData = new FormData(); 
    formData.append('file', file)
    axios.post('/upload', formData)
    dispatch(updateFileName(formData))
   }

  const UploadSectionInputValues = async () => {

    const {
      SectionInputValue
    } = sectionInput;

   await axios.post('/uploadsectionvalues', {
    SectionInputValue,
   })
  }

  const handleSaveButton = () => {
    UploadSectionInputValues(); 
    upload(); 
    validateInputValues(); 
    validateFile(); 
  }

  return (
    <>
   { isRemovebuttonclicked &&  
   
   <form
   onSubmit={UploadSectionInputValues}
   >
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

{ isDataSaved && <OutlinedInput
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

{ isDataSaved && <Box
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
     type='file' 
     onChange={handleFileChange}
     onClick={() => setFileError(styleDefault)}
     />


    </Box>}

    {!isDataSaved && <DoneAllIcon
sx={{
  position:'relative', 
  left:'35%', 
  fontSize:'6rem', 
  top:'2rem',
  opacity:'.4', 
}}
/>}

{ isDataSaved ? <Button
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
onClick={() => setDataSaved(true)}
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

