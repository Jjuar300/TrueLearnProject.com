import React from 'react'
import './css/trending.css'
import DummyCourses from '../ExploreCourse/DummyCourses'

export default function Trending() {
  return (
   <>
    <div className='trending'>
      <h1 className='TrendingTitle' >Trending Courses</h1>
      <DummyCourses/>
    </div>
   </>
  )
}
