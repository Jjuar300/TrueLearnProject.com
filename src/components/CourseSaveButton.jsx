import React from 'react'
import { Button } from '@mui/material'
import {useMediaQuery} from '@mui/material'
import {useSelector} from 'react-redux'

export default function CourseSaveButton() {
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)')
    const UploadVideoForm = useSelector(state => state.Input.UploadVideoFormState) 
  return (
    <>
        <Button
    // onClick={UploadVideoForm}
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
