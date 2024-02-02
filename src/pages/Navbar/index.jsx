
import { 
  Box, 
} from '@mui/material'
import Signup from './Signup'
import HamburgerMenu from './HamburgerMenu/index'
import SearchBar from './SearchBar'
import Promo from './Promo'
import TrueLearnlogo from '../../assets/Logo.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useNavigate } from 'react-router-dom'
import UserMenu from './UserMenu'
import { 
  SignedIn, 
  SignedOut, 
} from '@clerk/clerk-react'

export default function NavBar() {
  const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
  const navigate = useNavigate(); 

  return (
    <>
    {/* <Promo></Promo> */}
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
    <Signup/>
    </SignedOut>

    <HamburgerMenu></HamburgerMenu>
    <SearchBar></SearchBar>
    </Box>
   
    </>

  )
}
