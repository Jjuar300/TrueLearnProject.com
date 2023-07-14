import React, { useState } from 'react'
import {Box, Card, TextField, Button, Typography} from '@mui/material'
import HamburgerMenu from '../Navbar/HamburgerMenu'
import TruelearnLogo from '../../assets/Logo.png'
import SignupButton from '../Navbar/Signup'
import SearchBar from '../Navbar/SearchBar'
import {Field, Form, Formik} from 'formik'
import './css/Signin.css'
import SignUpPage from './SignUp'
import {useSelector, useDispatch} from 'react-redux'
import {getSwitchToSignup} from '../../state/AuthenticationSlice'
import NavBar from '../Navbar'

export default function SignIn() {
const isSignUp = useSelector(state => state.Authenticate.signup)
const dispatch = useDispatch(); 

  return (
  <>
  
  <NavBar></NavBar>

{isSignUp ?  <div className='signform'>
   <h1 className='signintext' >Sign In to your account</h1>
   <Formik >
    <form
    name='form'
    >
   <TextField 
   required
       name='email'
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
        name='Signinbutton'
        sx={{
          border:'1px solid gray', 
          color:'white', 
          backgroundColor:'black',
          ':hover': {backgroundColor:'#413c3f'}, 
        }}
        >
          SIGN IN  
        </Button>

        <Button
        name='forgotpasswordbutton'
        sx={{
          position:'absolute', 
          top:'16rem',
          left:'-1%',
          color:'#2a024f', 
          fontSize:'12px', 
        }}
        >
          Forgot password?
        </Button>

       <Box
       sx={{
        position:'absolute', 
        display:'flex', 
        top:'20rem', 
        left:'5%',
        width:'300px'
       }}
       >
       <Typography
       sx={{
        position:'relative', 
        width:'260px',
        fontSize:'12px'  
       }}
       >
          Don't have a TrueLearn account?
        </Typography>

        <Button
        name='signupbutton'
        onClick={() => dispatch(getSwitchToSignup())}
        sx={{
          width:'90px', 
          fontSize:'12px',
          left:'-17%', 
          top:'-6px', 
          color:'#1d0031',  
        }}
        >
            SIGN UP
          </Button>
       </Box>

    </form>
    </Formik>
   </div> :
   <SignUpPage />
   }

  </>
  )
}
