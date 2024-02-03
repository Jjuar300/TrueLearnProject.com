import React, { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from '../Navbar/index'
// import Trending from '../TrendingCourses/Trending'
import SliderImage from '../SliderImage/SliderImage'
import Greet from '../../components/LoadingSpinner'
import axios from 'axios'

const Trending = lazy(() => import('../TrendingCourses/Trending'))


export default function HomePage() {

  return (
  <>
    <Navbar></Navbar>
    <SliderImage></SliderImage>
    <Suspense fallback={<Greet/>} >
    <Trending></Trending>
    </Suspense>
  </>
  )
}
