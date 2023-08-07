import React, { useDebugValue, useEffect, useState, useContext } from 'react'
import {Box, Card, TextField, Button, Typography} from '@mui/material'
import {Field, Form, Formik, useFormik} from 'formik'
import './css/Signin.css'
import SignUpPage from './SignUp'
import {useSelector, useDispatch} from 'react-redux'
import {getSwitchToSignup} from '../../state/AuthenticationSlice'
import NavBar from '../Navbar'
import { redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { getData } from '../../state/ServerSlice'
import { UserContext } from '../../context/userContext'
import Cookies from 'js-cookie'

export default function SignIn() {
const isSignUp = useSelector(state => state.Authenticate.signup)
const dispatch = useDispatch(); 
const navigate =  useNavigate(); 
const [signin, setsignin] = useState(null); 

const [data, setdata] = useState({
  email: '', 
  password:'', 
})




const UserSignIn = async (e) => {
e.preventDefault(); 
const {email, password} = data; 
try{
const {data} = await axios.post('/usersignin', {
  email, 
  password,
})  
 
console.log(data)

if(data.error) {
  console.log('sign in did not work ')
}else{
  setdata({})
  navigate('/')
  dispatch(getData({
    data: Cookies.get('token')
  }))
}

}catch(err){
console.log(err)
}
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
    onSubmit={UserSignIn}
    >
   <TextField 
   required
       id='email' //this was changed
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
        id='password' //this was changed
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
        onClick={() => navigate('/signup')}
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
