import React from 'react'
import { Button } from '@mui/material'
import {useMediaQuery} from '@mui/material'

export default function CourseSaveButton() {
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)')

  return (
    <>
        <Button
    // onClick={() => navigate('/createcourse')}
    type='submit'
    sx={{
      position:'relative', 
      border:'1px solid gray', 
      fontSize:'15px', 
      width: isNotMobileScreen ? '30rem' :'20rem',
      height:'1.5rem',  
      backgroundColor:'black', 
      color:'white', 
      top:'120px', 
      left: isNotMobileScreen ? '10%' : '4%', 
      ':hover': {backgroundColor: 'gray'}, 
    }}
    >
      Save
    </Button>
    </>
  )
}
