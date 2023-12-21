import React from 'react'
import { Typography} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Courses() {
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)');

  return (
    <>
 <DeleteIcon
 onClick={() => console.log('delete')}
        sx={{
          position:'absolute', 
          zIndex:'1',  
          top:'14rem', 
          fontSize:'2.5rem',
          color: '#be4161',
          left:'34rem', 
          ':hover': {cursor: 'pointer'},    
        }}
    />

     <Typography
     sx={{
      position:'absolute', 
      top: isNotMobileScreen ? '10rem' : '8rem',
      fontSize:'30px', 
      fontFamily:'roman', 
      fontWeight:'bold', 
      left: isNotMobileScreen ? '13%' : 'none',  
     }}
     >
        My courses
       </Typography>
    </>
  )
}
