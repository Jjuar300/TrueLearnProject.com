
import {
  Box,
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getLogout} from '../../../state/ServerSlice';
import SignUpButton from '../../../components/SignUpButton';
import Cookies from 'js-cookie';
import Divider from '@mui/material/Divider';

export default function HamburgerMenu() {
  const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
  const open = useSelector((state) => state.handleDrawer.open)
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const userData = useSelector(state => state.ServerSlice.data)

  const handlelogout = () => {
    dispatch(getLogout({
      data: Cookies.remove('token'), 
    }))
    dispatch(handleClose())
    navigate('/')
  }

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
   left: userData ? '65%' : '72%',
   top:'2.4rem',  
}}
>
<Typography
onClick={() => {navigate('/explorecourse')}}
name='exploreCourses'
sx={{ 
  left: '60%', 
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

{
  userData ?
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
  : 
null
}

</Box>
  
  :<Box>

{ userData ? 

< AccountCircleIcon
name='HamburgerMenuIcon'
onClick={() => dispatch(handleOpen())}
 sx={{
  position: 'absolute', 
  left: '87%', 
  top: '30px', 
  fontSize: '30px', 
  color: 'black', 

}}
/> :

< MenuIcon
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
}

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
onClick={() => {navigate('/explorecourse'); dispatch(handleClose())}}
sx={{
  position: 'absolute', 
  top: '100px',
  left: '10%', 
  fontSize: '25px',  
}}
>
  Explore Courses
</Typography>

{ userData ? <Typography
name='createCourse'
onClick={()=> {navigate('/mylearnings'); dispatch(handleClose())}}
sx={{
  position: 'absolute', 
  top:'180px',
  fontSize: '25px', 
  left:'10%'
}}
>
  My learnings
</Typography>
: 
null
}

{ userData ? <Typography
name='createCourse'
onClick={()=> {navigate('/mycourses'); dispatch(handleClose())}}
sx={{
  position: 'absolute', 
  top:'290px',
  fontSize: '25px', 
  left:'10%'
}}
>
  My Courses
</Typography>
: 
null
}

{ userData ? <Typography
name='createCourse'
onClick={()=> {navigate('/userprofile'); dispatch(handleClose())}}
sx={{
  position: 'absolute', 
  top:'360px',
  fontSize: '25px', 
  left:'10%'
}}
>
  Edit Profile
</Typography>
: 
null
}

<CancelButton/>
{ userData ? null : <SignUp/>}
{ userData ? null : <SignIn/>}

</Box>

<Divider
sx={{
  position:'relative', 
  top:'200px',
}}
/>

<Divider
sx={{
  position:'relative', 
  top:'360px',
}}
/>

{ userData ? <SignUpButton
    onClick={handlelogout}
    name='SignInButton'
     sx={{
      left: '5%',
      top: '400px',
      width:'200px', 
      height: '60px', 
      backgroundColor: '#faf6fe',
      border: '1px solid black'
    }}
    >
  <Typography
   color='black'
   fontSize='20px'
  >
    Log out
  </Typography>
    </SignUpButton>
  : null  
  }

</Drawer>
</Box>

}
</>

  )
}
