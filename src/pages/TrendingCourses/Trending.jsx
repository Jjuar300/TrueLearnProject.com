import React, { lazy, Suspense } from 'react'
import './css/trending.css'
import LoadingSpinner from '../../components/LoadingSpinner'
// import DummyCourses from '../ExploreCourse/DummyCourses'
const DummyCourses = lazy(() => import('../ExploreCourse/DummyCourses'))

export default function Trending() {
  return (
   <>
    <div className='trending'>
      <h1 className='TrendingTitle' >Trending Courses</h1>
      <Suspense fallback={<LoadingSpinner/>} >
      <DummyCourses/>
      </Suspense>
    </div>
   </>
  )
}
