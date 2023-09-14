
import {Box,Button, Typography, OutlinedInput, TextField, InputAdornment} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import { Formik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react';
import axios from 'axios';

const Catergories = [
  {
    value:'Artificial Inteligence',
    label:'Artificial Inteligence',  
  }, 
  {
    value:'Product Management', 
    label:'Product Management', 
  }, 
  {
    value:'Robotics', 
    label:'Robotics', 
  }, 
  {
    value:'Graphic design', 
    label:'Graphic design', 
  }, 
  {
    value:'Engineering', 
    label:'Engineering', 
  }
]


export default function ClassInfo() {
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 
  const [file, setfile] = useState(); 
  const [fileName, setFileName] = useState(); 
  const [isDataSaved, setDateSaved] = useState(true); 
  const [error, setError] = useState(); 
  const [fileError, setFileError] = useState(); 
  const [catergory, setCategory] = useState(); 
  const [courseInput, setCourseInput] = useState({
    title: '', 
    description: '', 
    price: Number,
    catergory: '', 
  }) 

 const uploadFiles = () => {
    const formData = new FormData(); 
    formData.append('file', file)
    axios.post('/upload', formData)
 }

 const uploadCourseInputValues = async () => {
  try{
    const {
      title, 
      description, 
      price, 
      catergory, 
    } = courseInput; 
    await axios.post('/uploadcourselandingpage', {
      title, 
      description, 
      price, 
      catergory, 
    })
  }catch(error){
    console.log(error); 
  }
 }

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0]; 
  const filename = selectedFile.name; 
  setfile(selectedFile)
  setFileName(filename)
}

const handleCreateCourseButton = () => {
  uploadCourseInputValues(); 
  uploadFiles(); 
}

  return (
   <>
    <Box
    sx={{
      position:'absolute', 
      left: isNotMobileScreen ? '40%' : 'none', 
      top: isNotMobileScreen ? '10rem' :'none'
    }}
    >
    
      <form>
      <Box
     name='courseoverview'
     sx={{
      position:'absolute', 
      display:'flex', 
      flexDirection:'column',
      flexWrap:'wrap',  
      gap:'1rem', 
      top:'50px', 
      left:'5%', 
      width:'15rem', 
     }}
     >
      <Typography variant='h5'>
        Course Overview
      </Typography>
      <Typography>
        Add course details to help learn 
        more about your course. 
      </Typography>
     </Box>
      
     <Box
     name="details"
     sx={{
      position:'absolute',
      display:'flex', 
      flexDirection:'column', 
      top:'15rem',
      left:'8%',
      gap:'2rem', 
      flexWrap:'wrap',  
      height:'40rem', 
     }}
     >
      <Box
      sx={{ 
        top:'12rem', 
        left:"10%", 
      }}
      >
        <Typography
        sx={{
          fontWeight:'bold', 
          color:'#453d43', 
        }}
        >
          Course Title
        </Typography>

        <OutlinedInput
        placeholder='My course'
        onChange={(event) =>  setCourseInput({...courseInput, title: event.target.value})}
        sx={{
          width:'20rem', 
          height:'2rem', 
        }}
        />

      </Box>

      <Box
      >
        <Typography
        fontWeight='bold'
        >
          Course description
        </Typography>

        <TextField
        multiline
        placeholder='This course...' 
        onChange={(event) =>  setCourseInput({...courseInput, description: event.target.value})}
        sx={{
          width:'20rem',
        }}
        />
      </Box>

      <Box
      >
        <Typography
        fontWeight='bold'
        >
          Price of course
        </Typography>

        <TextField
        type='number'
        onChange={(event) =>  setCourseInput({...courseInput, price: event.target.value})}
        InputProps={{
          startAdornment:(
            <InputAdornment>
            <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}
        sx={{
          width:'20rem',
        }}
        />
      </Box>

      <Box
      >
        <TextField
        select
        label='Catergory'
        defaultValue='Artificial Inteligence'
        sx={{
          width:'20rem', 
        }}
        >
      {Catergories.map((option) =>(
        <MenuItem 
        key={option.value} 
        value={option.value}
        onClick={() => setCourseInput({...courseInput, catergory: option.value})}
        > 
        {option.label}
        </MenuItem>
      ))}

          </TextField>

      </Box>

      <Box
    name='previewvideo'
    sx={{
      position:'absolute', 
      width: isNotMobileScreen ? '10rem' : '5rem',
      height:'4rem', 
      padding:'.5rem',
      top:'26rem', 
      left:'-20%'
    }}
    >
    
  <Typography
  sx={{
    position:'relative', 
    width:'15rem', 
  }}
  >
    Upload Preview video here
  </Typography>

    <Box
    sx={{
      position:'absolute', 
      border:'1px solid black', 
      width:'30rem', 
      height:'7rem', 
      left:'2%', 
      top:'39px', 
      borderStyle: 'dashed', 
      cursor:'pointer', 
    }}
    >
   
   <input 
   type='file'
   onChange={handleFileChange}
   />

    </Box>
    </Box>

     </Box>

     <Button
     onClick={handleCreateCourseButton}
   sx={{
    position:'absolute', 
    top:'12rem', 
    left:'-20rem', 
    border:'1px solid black', 
    color:'white', 
    backgroundColor:'#431440', 
   //  ':hover': {backgroundColor:'#80267a'},
   ':hover': {backgroundColor:'#431440'},
    opacity:'.4',   
   }}
   >
    Create Course
   </Button>

      </form>
    </Box>

   </>
  )
}
