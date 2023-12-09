import {Box, Card, TextField, Button, Typography} from '@mui/material'
import './css/signUp.css'
import {useSelector, useDispatch} from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios'
import NavBar from '../Navbar'
import { getImageUrl } from '../../state/createcourse/VideoUrl'

export default function SignIn() {
const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
const navigate = useNavigate(); 
const dispatch = useDispatch(); 
const [file, setfile] = useState(); 
const imageFileUrl = useSelector(state => state.videoUrl.imageUrl)

const [data, setdata] = useState({
  firstname: '',  
  picturePath:'', 
  email:'', 
  password:'', 
  picturePath:imageFileUrl, 
}); 

console.log(data.picturePath)
console.log(imageFileUrl)

const firstName = data.firstname; 
const Email = data.email; 
const Password = data.password; 

// const uploadFiles = () => {
//   const formData = new FormData();
//   formData.append('file', file)
//   axios.post('/uploadvideo', formData)
//   .then((error) => console.log(error))
//   dispatch(getImageUrl(file.name))
//  }

 const uploadFiles = () => {
  const formData = new FormData(); 
  formData.append('file', file)
  //  axios.post('/uploadvideo', formData)
  //  .then(response => {console.log(response.data)})
  //  .catch(error => console.log('error:', error))
   dispatch(getImageUrl(file.name))
}

const getUserSignUp = async (e) => {
  e.preventDefault();
  try{
    const {
      firstname,
      email, 
      password, 
      picturePath,  
    } = data;  

 await axios.post('/usersignup', {
  firstname, 
  email,
  password, 
  picturePath, 
 })

 if(!data){
  console.log('not data')
 }else{
  navigate('/signin')
 }

  }catch(err){
    console.log(err)
  }
}

  return (
  <>
 <NavBar/> 
  <div className='signupform'>
  <h1 className='signUptext' >Create an account</h1>

  <form onSubmit={getUserSignUp} >

    <TextField 
    autoComplete='new-text'
    label='Full Name'
    variant='outlined'
    value={firstName}
    onChange={(e) => setdata({...data, firstname: e.target.value})}
    type='text'
    required
    sx={{
      backgroundColor:'#fdf8ff'
    }}
    />

    <Box
    sx={{
      border:'1px solid gray',
      borderRadius:'5px', 
      width: '16rem',
      height:'5rem',
      display:'flex',  
      justifyContent:'center', 
      padding:'1rem',  
      backgroundColor:'#fdf8ff',
      color:'gray'
    }}
    >  
   
      <TextField
   sx={{
    position:'absolute',  
    height:'4rem',
    width:'15rem',  
    top:'6.5rem', 
    left:'1.5rem', 
    ':hover': {cursor:'pointer'}
   }}
   type="file"
   onChange={(e) => setfile(e.target.files[0])}
   />

    </Box>

  <TextField
  name='email' 
  required
    label='Email' 
    variant='outlined'  
    type='Email'
    value={Email}
    onChange={(e) => setdata({...data, email: e.target.value})}
    autoComplete='new-Email' 
    sx={{
      backgroundColor:'#fdf8ff'
    }}
    /
      >

      <TextField
      name='password' 
      required
      label='password'
      variant='outlined'
      type='password'
      value={Password}
      onChange={(e) => setdata({...data, password: e.target.value})}
      autoComplete='new-password'
      sx={{
      backgroundColor:'#fdf8ff', 
      }}
      />

      <Button
      onClick={uploadFiles}
      name='signupbutton'
      type='submit'
      sx={{
        border:'1px solid gray', 
        color:'white', 
        backgroundColor:'black',
        ':hover': {backgroundColor:'#413c3f'}, 
      }}
      >
        SIGN UP  
      </Button>

      <Box
      sx={{
        position:'absolute',
        top: isNotMobileScreen ? '35rem' :'40rem',  
        display:'flex', 
        justifyContent:'space-between',
        alignItems:'center',  
        left: isNotMobileScreen ? '7%' : 'none', 
      }}
      >
        <Typography>
          Already have an account?
        </Typography>

        <Button
        name='signin'
       onClick={() => navigate('/signin')}
        sx={{
          color:'#1d0031', 
          top:'4px',
          top:'1px', 
        }}
        >
          SIGN IN
        </Button>

      </Box>

  </form>
  </div> 
  </>
  )
}
