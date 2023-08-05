import {Box, Card, TextField, Button, Typography} from '@mui/material'
import {Field, Form, Formik, useFormik} from 'formik'
import './css/signUp.css'
import {useSelector, useDispatch} from 'react-redux'
import {getSwitchToSignin} from '../../state/AuthenticationSlice' 
import SignInPage from './SignIn'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../Navbar'

export default function SignIn() {
const isSignin = useSelector(state => state.Authenticate.signin)
const dispatch = useDispatch(); 
const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
const navigate = useNavigate(); 
const [data, setdata] = useState({
  firstname: '', 
  lastname:'', 
  picturePhoto:null, 
  email:'', 
  password:'', 
}); 

const firstName = data.firstname; 
const lastName = data.lastname;
const Email = data.email; 
const Password = data.password; 


const getUserSignUp = async (e) => {
  e.preventDefault();
  const {
    firstname,
    lastname,
    email, 
    password 
  } = data;

  try{
 const {data} = await axios.post('/usersignup', {
  firstname, 
  lastname, 
  email,
  password, 
 })

 if(!data){
  console.log('not data')
 }else{
  setdata({})
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
    name='firstname'
    autoComplete='new-text'
    label='First Name'
    variant='outlined'
    value={firstName}
    onChange={(e) => setdata({...data, firstname: e.target.value})}
    type='text'
    required
    sx={{
      backgroundColor:'#fdf8ff'
    }}
    />

    <TextField 
    name='lastname'
    autoComplete='new-text'
    label='Last Name'
    variant='outlined'
    value={lastName}
    onChange={(e) => setdata({...data, lastname: e.target.value})}
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
    <Box
    name='uploadphoto'
    sx={{
      border:'2px dashed gray',
      width: '10rem',
      height:'4rem', 
      padding:'.5rem', 
    }}
    >
      <Typography>
        Upload photo
      </Typography>

    </Box>
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
