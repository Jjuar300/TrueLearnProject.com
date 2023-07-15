import React  from 'react'
import { Box, Button, Typography } from '@mui/material'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from '../Navbar';

export default function CreateCourseGuide() {
    const navigate = useNavigate(); 
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)')

    return (
   <>

<NavBar/>

   <Box
      name='guide'
      sx={{
        position:'absolute', 
        display:'flex', 
        flexDirection:'column', 
        gap:'2rem', 
        top: isNotMobileScreen ? '13rem' : '12rem',
        left: isNotMobileScreen ? '35%' : '25%',
        width: isNotMobileScreen ? '15rem' : 'none' ,  
      }}
      >

<Typography variant='h5' 
      sx={{
        position:'relative', 
        fontFamily:'roman', 
        fontWeight:'bold', 
        top: isNotMobileScreen ? '0rem' : '-4rem',
        left: isNotMobileScreen ? '5%' : '-5%',  
        color:'#1b0032', 
        width: isNotMobileScreen ? 'none' : '16rem', 
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
          width:'15rem',
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
             width: isNotMobileScreen ? '25rem' : 'none', 
          }}
          />
              <Typography
              sx={{
                position:'relative', 
                top:'-24px',
                left: isNotMobileScreen ? '65%' : '15%', 
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
             width: isNotMobileScreen ? '25rem' : 'none', 
          }}
          />
              <Typography
              sx={{
                position:'relative', 
                top:'-24px',
                left: isNotMobileScreen ? '90%' : '18%', 
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
      left: isNotMobileScreen ? '25%' : '-20%', 
      ':hover': {backgroundColor: 'gray'}, 
    }}
    >
      Create Course
    </Button>
      </Box> 
   </>
  )
}
