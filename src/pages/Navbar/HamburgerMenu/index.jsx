import React, { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Drawer
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SignUpButton from '../../../components/SignUpButton';
import CancelIcon from '@mui/icons-material/Cancel';
import SignUp from './SignUp'
import SignIn from './SignIn';
import CancelButton from './CancelButton';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { handleOpen } from '../../../state/CancelButtonSlice';
import TrueLearnLogo from '../../../assets/Logo.png'
import CreateCourse from '../../Createcourse';


//I forgot to add the menuicon inside the button component. 
export default function HamburgerMenu() {
  
  const open = useSelector((state) => state.handleDrawer.open)
  const dispatch = useDispatch(); 

  return (
<>

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
  <img width='120px'  src={TrueLearnLogo} />

<Typography
name='exploreCourses'
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
onClick={()=> console.log('a course was created')}
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
</>

  )
}
