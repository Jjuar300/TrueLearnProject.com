import React, { lazy, Suspense } from 'react'
import './css/trending.css'
import LoadingSpinner from '../../components/LoadingSpinner'
import { Typography } from '@mui/material'
const DummyCourses = lazy(() => import('../ExploreCourse/DummyCourses'))

export default function Trending() {
  return (
   <>
    <Typography
   sx={{
    position:'absolute', 
    fontSize:'2rem',
    left:'10rem', 
    top:'57rem',  
    fontFamily:'roman'
   }}
   >
    Trending Courses
    </Typography>
    <div className='trending'>
      <Suspense fallback={<LoadingSpinner/>} >
      <DummyCourses/>
      </Suspense>
    </div>
   </>
  )
}
