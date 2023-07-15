import React, { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Drawer
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SignUp from './SignUp'
import SignIn from './SignIn';
import CancelButton from './CancelButton';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { handleOpen } from '../../../state/CancelButtonSlice';
import TrueLearnLogo from '../../../assets/Logo.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { handleClose } from '../../../state/CancelButtonSlice';

export default function HamburgerMenu() {
  const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
  const open = useSelector((state) => state.handleDrawer.open)
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  return (
<>
{
  isNotMobileScreen ?

  
<Box
sx={{
  position:'absolute',
  display:'flex', 
  gap:'3rem',  
   width:'20rem', 
   left:'72%',
   top:'2.4rem',  
}}
>
<Typography
onClick={() => {navigate('/mycourses')}}
name='exploreCourses'
sx={{
  left:'60%', 
  top: '40px', 
  fontSize: '18px',  
  fontFamily:'roman', 
  fontWeight:'bold', 
  color:'#373b3f',
  cursor:'pointer', 
}}
>
  Explore Courses
</Typography>

<Typography
onClick={() =>{navigate('/createcourse')}}
name='createCourse'
sx={{
  top:'40px',
  fontSize: '25px', 
  left:'70%', 
  fontSize:'18px', 
  fontFamily:'roman', 
  fontWeight:'bold', 
  color:'#373b3f', 
  cursor:'pointer', 
}}
>
  Create Course
</Typography>

</Box>
  
  :<Box>
  
<MenuIcon
name='HamburgerMenuIcon'
onClick={() => dispatch(handleOpen())}
 sx={{
  position: 'absolute', 
  left: '87%', 
  top: '30px', 
  fontSize: '30px', 
  color: 'black', 

}}
/>

<Drawer 
anchor='right'
open={open}
PaperProps={{
  sx:{
    backgroundColor: 'white', 
  }
}}
>
<Box 
width='230px'
textAlign='center'
role='presentation'
>
  <img
  onClick={() => {navigate('/'); dispatch(handleClose())}} 
  width='120px'  
  src={TrueLearnLogo} />

<Typography
name='exploreCourses'
onClick={() => {navigate('/mycourses'); dispatch(handleClose())}}
sx={{
  position: 'absolute', 
  top: '100px',
  left: '10%', 
  fontSize: '25px',  
}}
>
  Explore Courses
</Typography>

<Typography
name='createCourse'
onClick={()=> {navigate('/createcourse'); dispatch(handleClose())}}
sx={{
  position: 'absolute', 
  top:'200px',
  fontSize: '25px', 
  left:'10%'
}}
>
  Create Course
</Typography>

<CancelButton/>
<SignUp/>
<SignIn/>

</Box>
</Drawer>
</Box>
}
</>

  )
}
