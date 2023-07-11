import React from 'react'
import SignupButton from '../Navbar/Signup'
import SearchBar from '../Navbar/SearchBar'
import HamburgerMenu from '../Navbar/HamburgerMenu'
import TruelearnLogo from '../../assets/Logo.png'
import ChanelSearchBar from './LearningSearchBar'
import {Box} from '@mui/material'

export default function ChanelPage() {
  return (
    <>
     <Box
     sx={{
      border:'1px solid #d6ccd5', 
      borderLeft:'none', 
      borderRight:'none', 
      borderTop:'none', 
      height:'5rem', 
     }}
     >
     <img width='150px' src={TruelearnLogo} />
     <SignupButton></SignupButton>
     <SearchBar></SearchBar>
     <HamburgerMenu></HamburgerMenu>
     <ChanelSearchBar/>
     </Box>
    </>
  )
}
