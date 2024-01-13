import React, {useState} from 'react'
import {Box, TextField, Button, Typography} from '@mui/material'
import './css/Signin.css'
import SignUpPage from './SignUp'
import {useSelector, useDispatch} from 'react-redux'
import NavBar from '../Navbar'
import {useNavigate } from 'react-router-dom'
import { useSignIn } from '@clerk/clerk-react'
import { updateUserPosition } from '../../state/components/UserFile'

export default function SignInPage() {
const isSignUp = useSelector(state => state.Authenticate.signup)
const dispatch = useDispatch(); 
const navigate =  useNavigate(); 
const {signIn, setActive} = useSignIn(); 

const [data, setdata] = useState({
  email: '', 
  password:'', 
})

const userSignIn = async (e) => {
  e.preventDefault(); 
  await signIn.create({
    identifier: data.email, 
    password: data.password, 
  }).then((result) => {
    if (result.status === "complete") {
      console.log(result);
      setActive({ session: result.createdSessionId });
      navigate('/')
    } else {
      console.log(result);
    }
  })
  .catch((err) => console.error("error", err.errors[0].longMessage));
}

const handleSignUpButton = () => {
  dispatch(updateUserPosition(false))
  navigate('/signup')
}

const Email = data.email; 
const Password = data.password; 

  return (
  <>
  <NavBar></NavBar>
{isSignUp ?  <div className='signform'>
   <h1 className='signintext' >Sign In to your account</h1>
    <form
    name='form'
    onSubmit={userSignIn}
    >
   <TextField 
   required
       id='email' 
       name='email'
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
        id='password'
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
        name='Signinbutton'
        type='submit'
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
        onClick={handleSignUpButton}
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
   </div> :
   <SignUpPage />
   }

  </>
  )
}
