import React, { useContext } from 'react'
import Navbar from '../Navbar/index'
import Trending from '../TrendingCourses/Trending'
import SliderImage from '../SliderImage/SliderImage'
import { UserContext } from '../../context/userContext'

export default function HomePage() {
  const {user} = useContext(UserContext)
  return (
  <>
    <Navbar></Navbar>
    <SliderImage></SliderImage>
    <Trending></Trending>
  </>
  )
}
