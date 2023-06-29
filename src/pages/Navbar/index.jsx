
import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Signup from './Signup'
import HamburgerMenu from './HamburgerMenu/index'
import SearchBar from './SearchBar'
import Promo from './Promo'
import SliderImage from './SliderImage'

export default function NavBar() {
  return (

    <>

    <Promo></Promo>


<Box
    sx={{
      position:'relative', 
      top:'-10px', 
      height:'500px', 
      backgroundColor:'#f9f8f9',
    }}
    >
      <Typography
      position='relative'
      fontSize='25px'
      left='2%'
      top='20px'
      width='100px'
      fontFamily='roman'
      >
        TrueLearn
      </Typography>

    <Signup ></Signup>
    <HamburgerMenu></HamburgerMenu>
    <SliderImage></SliderImage>

    <SearchBar></SearchBar>
    </Box>


   
    </>

  )
}
