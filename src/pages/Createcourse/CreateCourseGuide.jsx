import React  from 'react'
import { Box, Button, Typography } from '@mui/material'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import SignupButton from '../Navbar/Signup';
import SearchBar from '../Navbar/SearchBar';
import HamburgerMenu from '../Navbar/HamburgerMenu';
import TruelearnLogo from '../../assets/Logo.png'

export default function CreateCourseGuide() {
    const navigate = useNavigate(); 
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)')

    return (
   <>

<div>
     <img width='150px' src={TruelearnLogo} />
     <SignupButton></SignupButton>
     <SearchBar></SearchBar>
     <HamburgerMenu></HamburgerMenu>
    </div>

   <Box
      name='guide'
      sx={{
        position:'absolute', 
        display:'flex', 
        flexDirection:'column', 
        gap:'2rem', 
        top: isNotMobileScreen ? '13rem' : '7rem',
        left: isNotMobileScreen ? '43%' : '25%' 
      }}
      >

<Typography variant='h5' 
      sx={{
        position:'relative', 
        fontFamily:'roman', 
        fontWeight:'bold', 
        top: isNotMobileScreen ? '0rem' : '-4rem',
        left:'-5%',  
        color:'#1b0032', 
      }}
      >
        Create with TrueLearn
      </Typography>

        <Box
        onClick={() =>  navigate('/uploadvideo')}
        sx={{
          top:'8rem', 
          display:'flex', 
          flexDirection:'column', 
          left:'25%',
          width:'12rem',
          height:'12rem',
          cursor:'pointer',    
        }}
        >
          <FeaturedVideoIcon
          sx={{
            border:'1px solid gray',
            top:'10rem',
            left:'25%',  
            fontSize:'10rem',
             color:'#ccbdbe',
             padding:'1rem', 
             backgroundColor:'#fbf9f9',  
          }}
          />
              <Typography
              sx={{
                position:'relative', 
                top:'-24px',
                left:'15%', 
                opacity:'.5', 
                fontFamily:'roman',  
              }}
              >
              Upload videos
            </Typography>
        </Box>

        <Box
        onClick={() => navigate('/courseinfo')}
        sx={{
          top:'8rem', 
          display:'flex', 
          flexDirection:'column', 
          left:'25%', 
          width:'12rem',
          height:'12rem',
          cursor:'pointer',    
        }}
        >
          <InfoIcon
          sx={{
            border:'1px solid gray',
            top:'10rem',
            left:'25%',  
            fontSize:'10rem',
             color:'#ccbdbe',
             padding:'1rem', 
             backgroundColor:'#fbf9f9',  
          }}
          />
              <Typography
              sx={{
                position:'relative', 
                top:'-24px',
                left:'18%', 
                opacity:'.5', 
                fontFamily:'roman',  
              }}
              >
              Course info
            </Typography>
        </Box>

        <Button
    sx={{
      position:'relative', 
      border:'1px solid gray', 
      fontSize:'15px', 
      width:'20rem',
      height:'1.5rem',  
      backgroundColor:'#28034c', 
      color:'white', 
      top:'30px', 
      left:'-20%', 
      ':hover': {backgroundColor: 'gray'}, 
    }}
    >
      Create Course
    </Button>
      </Box> 
   </>
  )
}
