
import { Box } from '@mui/material'
import Signup from './Signup'
import HamburgerMenu from './HamburgerMenu/index'
import SearchBar from './SearchBar'
import Promo from './Promo'
import TrueLearnlogo from '../../assets/Logo.png'
import { useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import UserMenu from './UserMenu'

export default function NavBar() {
  const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
  const navigate = useNavigate(); 
  const userData =  useSelector(state => state.ServerSlice.data)

  return (
    <>

    <Promo></Promo>

<Box
    sx={{
      position:'relative', 
      top:'-10px', 
      height:'500px',
      border: isNotMobileScreen ? '1px solid #a0a4a6' : 'none', 
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

    { userData ? <UserMenu/> : <Signup/>}
    <HamburgerMenu></HamburgerMenu>
    <SearchBar></SearchBar>
    </Box>
   
    </>

  )
}
