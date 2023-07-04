
import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Signup from './Signup'
import HamburgerMenu from './HamburgerMenu/index'
import SearchBar from './SearchBar'
import Promo from './Promo'
import SliderImage from './SliderImage'
import Categories from './Categories'
import TrueLearnlogo from '../../assets/Logo.png'
import { useDispatch } from 'react-redux'
import { getToSwitchHomePage } from '../../state/TrueLearnLogoSlice'

export default function NavBar() {
  const disptach = useDispatch(); 
  return (

    <>

    <Promo></Promo>


<Box
    sx={{
      position:'relative', 
      top:'-10px', 
      height:'500px', 
    }}
    >
      <Box
     sx={{
      position:'absolute', 
      top:'10px',
      left:'1%',  
     }}
      >
       <img  width='150px' src={TrueLearnlogo} />
      </Box>

    <Signup ></Signup>
    <HamburgerMenu></HamburgerMenu>
    <SliderImage></SliderImage>
    <SearchBar></SearchBar>
    <Categories></Categories>
    </Box>


   
    </>

  )
}
