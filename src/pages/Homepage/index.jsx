import React, { useContext } from 'react'
import Navbar from '../Navbar/index'
import Trending from '../TrendingCourses/Trending'
import SliderImage from '../SliderImage/SliderImage'
import SearchResult from '../../components/SearchResult'

export default function HomePage() {
  return (
  <>
    <Navbar></Navbar>
    <SliderImage></SliderImage>
    <Trending></Trending>
    {/* <SearchResult/> */}
  </>
  )
}
