import React from 'react'
import {Box} from '@mui/material'
import NavBar from '../Navbar'
import LearningPageSearchBar from './LearningSearchBar'
import { UserProfile } from '@clerk/clerk-react'

export default function ChanelPage() {
  return (
    <>
    {/* <UserProfile/> */}
     <Box
     sx={{
      borderLeft:'none', 
      borderRight:'none', 
      borderTop:'none', 
      height:'5rem', 
     }}
     >
       <NavBar/>
      <LearningPageSearchBar/>
     </Box>
    </>
  )
}
