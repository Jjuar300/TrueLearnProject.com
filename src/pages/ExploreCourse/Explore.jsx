import React from 'react'
import { Typography} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'


export default function Courses() {
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)');

  return (
    <>
     <Typography
     sx={{
      position:'absolute', 
      top: isNotMobileScreen ? '10rem' : '8rem',
      fontSize:'30px', 
      fontFamily:'roman', 
      fontWeight:'bold', 
      left: isNotMobileScreen ? '10rem' : 'none',  
     }}
     >
        Explore Courses
       </Typography>

       
    </>
  )
}
