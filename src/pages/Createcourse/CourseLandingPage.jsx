
import {Box,Button, Typography, OutlinedInput, TextField, InputAdornment} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoUrl } from '../../state/createcourse/VideoUrl';
import { getDelete } from '../../state/MyCourses/UserMenu';
import io from 'socket.io-client'

const socket = io().connect('http://localhost:3002/')

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
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 
  const [file, setfile] = useState(); 
  const [error, setError] = useState(false); 
  const videoFile = useSelector(state => state.videoUrl.VideoUrl);
  const userId = useSelector(state => state.userData.userId)

  const [courseInput, setCourseInput] = useState({
    title: '', 
    description: '', 
    price: '',
    catergory: '', 
    fileName: videoFile, 
  }) 

  const uploadFiles = () => {
      const formData = new FormData(); 
      formData.append('file', file)
       axios.post('/uploadvideo', formData)
       .then(response => {console.log(response.data)})
       .catch(error => console.log('error:', error))
       dispatch(getVideoUrl(file.name))
   }

 const uploadCourseInputValues = async () => {
  try{
    const {
      title, 
      description, 
      price, 
      catergory, 
      fileName, 
    } = courseInput; 
    await axios.post('/uploadcourselandingpage', {
      title, 
      description, 
      price, 
      catergory, 
      fileName, 
      userId, 
    })
   
  }catch(error){
    console.log(error); 
  }
 }

const ValidateCourseLandingPage = () => {
 const isTitle = courseInput.title === ''; 
 const isDescription = courseInput.description === ''; 
 const isPrice = courseInput.price === ''; 
 const isCategory = courseInput.catergory == '';  

isTitle ? setError(true) : setError(false)
isDescription ? setError(true) : setError(false)
isPrice ? setError(true) : setError(false)
isCategory ? setError(true) : setError(false)
!file ? setError(true) : setError(false)
}

const handleCreateCourseButton = () => {
  uploadCourseInputValues(); 
  uploadFiles(); 
  ValidateCourseLandingPage();
  dispatch(getDelete({ Delete: true }));  
  navigate('/'); 
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
    
      <form 
      encType='multipart/form-data'
      >
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
        onClick={() => setError(false)}
        onChange={(event) =>  setCourseInput({...courseInput, title: event.target.value})}
        sx={{
          width:'20rem', 
          height:'2rem', 
          border: error ? '1px solid red' : null, 
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
        onClick={() => setError(false)}
        placeholder='This course...' 
        onChange={(event) =>  setCourseInput({...courseInput, description: event.target.value})}
        sx={{
          width:'20rem',
          border: error ? '1px solid red' : null, 
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
        onClick={() => setError(false)}
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
          border: error ? '1px solid red' : null, 
        }}
        />
      </Box>

      <Box
      >
        <TextField
        select
        label='Catergory'
        defaultValue='Artificial Inteligence'
        onClick={() => setError(false)}
        sx={{
          width:'20rem', 
          border: error ? '1px solid red' : null, 
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
      border: error ? '2px solid red' : '2px solid black', 
      width:'30rem', 
      height:'7rem', 
      left:'2%', 
      top:'39px', 
      borderStyle: 'dashed', 
      cursor:'pointer', 
    }}
    >
   
   <input 
   type="file"
   accept='video/*, image/*'
   onChange={(e) => setfile(e.target.files[0])}
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
    ':hover': {backgroundColor:'#80267a'},
   }}
   >
    Create Course
   </Button>

      </form>
    </Box>

   </>
  )
}
