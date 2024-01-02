
import { 
  Box, 
  Button,
  Typography,
} from '@mui/material'
import Signup from './Signup'
import HamburgerMenu from './HamburgerMenu/index'
import SearchBar from './SearchBar'
import Promo from './Promo'
import TrueLearnlogo from '../../assets/Logo.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import UserMenu from './UserMenu'
import { 
  SignedIn, 
  SignInButton, 
  SignOutButton, 
  SignedOut, 
  UserButton, 
  UserProfile,
} from '@clerk/clerk-react'
import CreateCourse from '../Createcourse'

export default function NavBar() {
  const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
  const navigate = useNavigate(); 
  const userData =  useSelector(state => state.ServerSlice.data)
  const dispatch = useDispatch(); 

  return (
    <>
    <Promo></Promo>
<Box
    sx={{
      position:'relative', 
      top:'-10px', 
      height:'500px',
      height:'5.4rem', 
      borderTop:'none', 
      borderRight:'none', 
      borderLeft:'none',  
    }}
    >
      <Box
     sx={{
      position:'absolute', 
      top:'10px',
      left:'1%', 
     }}
      >
       <img  
        width='150px' 
        src={TrueLearnlogo} 
        onClick={() => navigate('/')}
        style={{
          cursor:'pointer', 
        }}
        />
      </Box>
 
    
    <SignedIn>
      <UserMenu/>
    </SignedIn>

    <SignedOut>
    
    <SignInButton>
    <Button
  name='SignUpButton'
  sx={{
    position:'absolute',     
    color: 'white',
    backgroundColor:'#8002a2',
    width:'60px',
    height:'30px', 
    left: isNotMobileScreen ? '70rem' :'50%',
    ":hover": {backgroundColor: '#a403cf'}, 
    borderRadius: '5px',
     top: isNotMobileScreen ? '3rem'  : '35px', 
     fontSize:'10px', 
  }}
  >
   Sign In
  </Button>
    </SignInButton>
    </SignedOut>

    <HamburgerMenu></HamburgerMenu>
    <SearchBar></SearchBar>
    </Box>
   
    </>

  )
}
