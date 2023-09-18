import React, {useEffect, useState } from 'react'
import {Button, Typography, Box, OutlinedInput} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import LectureSection from '../../components/LectureSection'
import axios from 'axios';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useDispatch } from 'react-redux';
import { getCourseLandingPage } from '../../state/createcourse/upload';

export default function UploadVideo() {
  const styleDefault = {border:'2px solid gray'}
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
  const [component, setComponent] = useState([]);
  const [file, setfile] = useState();
  const [isDataSaved, setDataSaved] = useState(); 
  const [error, setError] = useState(); 
  const [fileError, setFileError] = useState(styleDefault);
  const dispatch = useDispatch(); 

  const uploadFiles = () => {
    const formData = new FormData(); 
    formData.append('file', file)
    axios.post('/upload', formData)
   }

  const [introductionInput, setIntroductionInput] = useState({
    IntroductionInputValue: '', 
  })

  const AddingSection = () => {
    setComponent([...component, 
      <LectureSection/>])
  }

  const UploadIntroductionInputValue = async () => {
   try{
     const {
      IntroductionInputValue,  
    } = introductionInput;
   await axios.post('/uploadvideocontent', {IntroductionInputValue})
    }catch(err){
    console.log(err)
   }
  }

const handleInputChange = (event) => {
  setIntroductionInput({...introductionInput, IntroductionInputValue: event.target.value})
}

const ValidateCurriculum = () => {
  const inputStyling = {border:'1px solid red'} 
  const isValid = introductionInput.IntroductionInputValue === ''; 
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
  setfile(file)
  UploadIntroductionInputValue(); 
  uploadFiles(); 
  ValidateCurriculum(); 
};

const handleDeleteButton = () => {
   setDataSaved(null); 
    setFileError(styleDefault)
    setfile(false)
    setIntroductionInput({IntroductionInputValue: ''})
};

const handleUploadButton = () => {
dispatch(getCourseLandingPage('LandingPage'))
}

  return (
    <>
   <form
   encType='multipart/form-data'
   >
   <Button
   onClick={ isDataSaved && handleUploadButton}
    sx={{
      border:'1px solid black', 
      position:'absolute', 
      left:'45%',
      fontSize:'1rem', 
      top:'19rem', 
      color:'white', 
      backgroundColor:'black', 
      width:'10rem', 
      zIndex:'1',
      ':hover': {backgroundColor: !isDataSaved ? 'black' : '#3a3a3a'},
      opacity: !isDataSaved && '.4', 
    }}
    >
      Upload
    </Button>
   <Box
    name='uploadvideo'
    sx={{
      position:'absolute', 
      display:'flex', 
      flexDirection:'column', 
      flexWrap:'wrap', 
      left: isNotMobileScreen ? '35%' : '-1%', 
      top: isNotMobileScreen ? '8rem' : '5rem', 
    }}
    >
      
    <Box
    sx={{
        position:'relative', 
        top:'5px',
        display:'flex',
        flexDirection:'column', 
        justifyItems:'center',  
        gap:'1rem',
        left:'7%', 
        flexWrap:'wrap', 
        width:'20rem',  
    }}
>
<Typography
            sx={{
                fontSize:'30px', 
                fontWeight:'bold', 
                color:'#22033c', 
                fontFamily:'roman', 
            }}
            >Upload Curriculum</Typography>

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

   <Box
   sx={{
    position:'relative', 
    display:'flex', 
    flexDirection:'column', 
    gap:'2rem',
    flexWrap:'wrap', 
    top:'170px', 
    left:'8%',
   }}
   >
  
    <Box
    name="introduction"
sx={{
    border:'1px solid black',
    borderRadius:'14px',
    width: isNotMobileScreen ? '500px' : '300px', 
    height:'200px',  
}}
>

 { !isDataSaved && <OutlinedInput
variant='outlined'
required
placeholder='Introduction:'
type='text'
onChange={handleInputChange}
onClick={() => setError(null)}
sx={{
    position:'relative', 
    height:'30px', 
    left:'12%', 
    top:'20px',
    width: isNotMobileScreen ? '25rem' : 'none', 
    border: error, 
}}
/
>
   }
 { !isDataSaved && <Box
  name='addContent'
    sx={{
        position:'relative', 
      border:fileError,
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
      type="file" 
      onChange={(e) => setfile(e.target.files[0])} 
      onClick={() => setFileError(styleDefault)}
      />

    </Box>}

{isDataSaved && <DoneAllIcon
sx={{
  position:'absolute', 
  left:'38%', 
  fontSize:'6rem', 
  top:'3rem',
  opacity:'.4', 
}}
/>}

</Box>

{component.map(sections => [sections])}

<Box
onClick = {AddingSection}
name='addsection'
sx={{
  position:'relative', 
  padding:'.3rem', 
  top:'-15px', 
  cursor:'pointer',
  width: isNotMobileScreen ? 'none' : '18rem', 
}}
>
<AddIcon
    name="addicon"
    sx={{
        position:'relative', 
        border:'1px solid black', 
        borderRadius:'15px', 
        fontSize:'30px', 
        top:'3px',
        left:'42%',  

    }}
    />
</Box>

   </Box>

  { !isDataSaved ? <Button
 onClick={handleSaveButton}
sx={{
  position:'absolute', 
 color:'black', 
 left:'10%',
 top:'25rem',  
}}
>Save</Button> :
<Button
onClick={handleDeleteButton}
sx={{
  position:'absolute', 
 color:'black', 
 left:'10%',
 top:'25rem',  
}}
>
  Delete
</Button>
}
    </Box>
   </form>
    </>
  )
}
