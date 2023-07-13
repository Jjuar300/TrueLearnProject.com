import React from 'react'
import {Box, Card, TextField, Button, Typography} from '@mui/material'
import HamburgerMenu from '../Navbar/HamburgerMenu'
import TruelearnLogo from '../../assets/Logo.png'
import SignupButton from '../Navbar/Signup'
import SearchBar from '../Navbar/SearchBar'
import {Field, Form, Formik} from 'formik'
import './css/signUp.css'
import {useSelector, useDispatch} from 'react-redux'
import {getSwitchToSignin} from '../../state/AuthenticationSlice' 
import SignInPage from './SignIn'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function SignIn() {
const isSignin = useSelector(state => state.Authenticate.signin)
const dispatch = useDispatch(); 
const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')

  return (
  <>
  {isSignin ? <div className='signupform'>
  <h1 className='signUptext' >Create an account</h1>
  <Formik >
  <form>

    <TextField 
    name='firstname'
    autoComplete='new-text'
    label='First Name'
    variant='outlined'
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
      autoComplete='new-password'
      sx={{
      backgroundColor:'#fdf8ff', 
      }}
      />

      <Button
      name='signupbutton'
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
       onClick={() => dispatch(getSwitchToSignin())}
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
  </Formik>
  </div> :
  <SignInPage/>
  }

  </>
  )
}
