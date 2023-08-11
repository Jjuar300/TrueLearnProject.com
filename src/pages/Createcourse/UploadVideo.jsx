import React, {useState } from 'react'
import {Button, Typography, Box, OutlinedInput, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import LectureSection from '../../components/LectureSection'
import Dropzone from 'react-dropzone'
import UploadContent from '../../components/UploadContent'

const AddingIcon = <AddIcon
sx={{
 position:'absolute', 
 left:'44%',
 fontSize:'40px', 
 top:'2rem', 
}}
/>

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

export default function UploadVideo() {
  const navigate = useNavigate(); 
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
  const SectionElement = <LectureSection/>
  const [component, setComponent] = useState([SectionElement]); 
  const [introductionInput, setIntroductionInput] = useState({
    IntroductionInputValue: '', 
  })
 
function handleInputChange(event){
 setIntroductionInput({...introductionInput, IntroductionInputValue: event.target.value})
}

  const AddingSection = () => {
   const newComponent = [...component, SectionElement]
    return setComponent(newComponent)
  }

  return (
    <>
    <Box
    name='uploadvideo'
    sx={{
      position:'absolute', 
      display:'flex', 
      flexDirection:'column', 
      flexWrap:'wrap', 
      left: isNotMobileScreen ? '35%' : '-1%', 
      top: isNotMobileScreen ? '4rem' : '5rem', 
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
    onClick={() => navigate('/createcourse')}
    sx={{
      position:'relative', 
      border:'1px solid gray', 
      fontSize:'15px', 
      width: isNotMobileScreen ? '30rem' :'20rem',
      height:'1.5rem',  
      backgroundColor:'black', 
      color:'white', 
      top:'120px', 
      left: isNotMobileScreen ? '10%' : '4%', 
      ':hover': {backgroundColor: 'gray'}, 
    }}
    >
      Save
    </Button>

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
    sx={{
      border:'1px solid gray', 
      borderRadius:'15px', 
      display:'flex',  
      justifyContent:'center', 
      padding:'3rem',  
      backgroundColor:'#f7f6f6',
      color:'gray', 
      left:'12%', 
      width: isNotMobileScreen ? 'none' : '13rem', 
    }}
    >  
<Typography
sx={{
    position:'absolute', 
    top:'5px', 
}}
>
        Upload a preview video or picture here. 
      </Typography>
    <Box
    name='previewvideo'
    sx={{
      width: isNotMobileScreen ? '10rem' : '5rem',
      height:'4rem', 
      padding:'.5rem',
    }}
    >
    
    <Box
    sx={{
      position:'absolute', 
      border:'1px solid black', 
      width:'30rem', 
      height:'7rem', 
      left:'2%', 
      top:'35px', 
      borderStyle: 'dashed', 
      cursor:'pointer', 
    }}
    >
      <UploadContent
      height={'7rem'}
      Icons={AddingIcon}
      />
    </Box>
    </Box>
    </Box>
  
    <Box
    name="introduction"
sx={{
    border:'1px solid black',
    borderRadius:'14px',
    width: isNotMobileScreen ? '500px' : '300px', 
    height:'200px',  
}}
>

<OutlinedInput
variant='outlined'
required
placeholder='Introduction:'
type='text'
value={introductionInput.IntroductionInputValue}
onChange={handleInputChange}
sx={{
    position:'relative', 
    height:'30px', 
    left:'12%', 
    top:'20px',
    width: isNotMobileScreen ? '25rem' : 'none'  
}}
/
>
   
  <Box
  name='addContent'
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

</Box>

{component}

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
    </Box>
    </>
  )
}
