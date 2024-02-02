import {Box, TextField, Button, Typography} from '@mui/material'
import './css/signUp.css'
import {useSelector, useDispatch} from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'
import NavBar from '../Navbar'
import {useSignUp, useClerk} from '@clerk/clerk-react'
import UploadFile from '../../components/UploadFile';
import { uploadUserProfileImage } from '../../state/components/UserFile'

export default function SignUp() {
const {isLoaded, signUp, setActive} = useSignUp(); 
const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
const navigate = useNavigate(); 
const dispatch = useDispatch(); 
const imageFileUrl = useSelector(state => state.videoUrl.imageUrl)
const [userImage, setUserImage] = useState(); 
const [isEmailVerify, setEmailVerify] = useState(false); 

const [data, setdata] = useState({
  fullname: '',  
  email:'', 
  password:'', 
}); 

const firstName = data.fullname; 
const Email = data.email; 
const Password = data.password; 

const handleSubmit = async (e) => {
  e.preventDefault(); 
  dispatch(uploadUserProfileImage(userImage?.name))
  if(!isLoaded){return null;}
  
  try{
    await signUp.create({
      password: data.password,
      firstName: data.fullname, 
      emailAddress: data.email, 
    }).then((result) => {
      if(result.status === 'complete'){
        console.log(result); 
        setActive({session: result.createdSessionId})
        navigate('/')
      }else{
        console.log(result)
      }
    })
    .catch((error) => console.log(error))

  }catch(error){
    console.log(JSON.stringify(error, null, 2))
  }
}; 

  return (
  <>
 <NavBar/> 
  <div className='signupform'>
  <h1 className='signUptext' >Create an account</h1>

  <form >

    <TextField 
    autoComplete='new-text'
    label='Full Name'
    variant='outlined'
    value={firstName}
    onChange={(e) => setdata({...data, fullname: e.target.value})}
    type='text'
    required
    sx={{
      backgroundColor:'#fdf8ff'
    }}
    />

  <UploadFile
  setUserImage={setUserImage}
  />

  <TextField
  name='email' 
  required
    label='Email' 
    variant='outlined'  
    type='email'
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
      onClick={handleSubmit}
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
