import { 
  Box,
  Typography,
  CardContent, 
  CardMedia, 
  CardActionArea, 
  Card,
  Button, 
} from '@mui/material'

import {useEffect, useState} from 'react'
import NavBar from '../pages/Navbar'
import axios from 'axios'
import { userCourses } from "../data/courses";
import CourseCard from "../components/Course/CourseCard";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCourseData } from '../state/DummyCourses';

export default function SearchResult() {
    const [searchInput, setSearchInput] = useState('');  
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const isCourseInputTitle = useSelector(state => state.ImportValue.isCourseCardTitle)

    console.log(searchInput.toLowerCase())

   useEffect(() => {
   axios.get('/getsearchinputs')
   .then((response) => setSearchInput(response.data[0].inputResult))
   .catch((error) => console.log(error))
  },[])
  
 const isResult = userCourses.map((data) => (
    data.title.includes(searchInput) 
  ))

  const handleCardClick = (index) => {
      
    userCourses.forEach((course) => {
        index === course.id && dispatch(getCourseData({
            title: course.title, 
            description: course.description,
            price: course.price, 
            image: course.image, 
        }))
    })
 
    navigate('/dummybuycourse')
}

  return (
    <>
    <NavBar/>
          <Box
          sx={{
              position:'absolute', 
              left:'7rem',
              top:'8rem',  
          }}
          >
            {isResult.includes(true) || isCourseInputTitle ? <h1>  Results: {`' ${searchInput} '`}</h1>  : <h1> No Results Found: {`' ${searchInput} '`} </h1> }

          </Box>

<Box
  sx={{
        position:'absolute', 
        display:'flex',
        flexWrap:'wrap', 
        gap:'2rem', 
        width:'100rem', 
        top:'16rem',  
        justifyContent:'center', 
  }}
  >
  {
      userCourses.filter((data) => (
        searchInput === '' 
        ? console.log('sending search result data')
        : data.title.includes(searchInput)
      )).map((data) =>(
   
        <Card
        onClick={() => handleCardClick(data.id)}
        key={data.id}
        sx={{
        width:'20rem',
        height:'auto', 
        left:'15rem',
        top:'20rem',   
    }}
    >
        <CardActionArea>
           <CardMedia 
                component='img'
                style={{objectFit:'cover'}}
                image={data.image}
                />
            <CardContent>
                <Typography
                gutterBottom
                variant="h5"
                component='div'
                >
                   {data.title}
                </Typography>
                <Typography>
                   {data.description}
                </Typography>
                <Typography>
                   $ {data.price}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    ))
   }
    {isCourseInputTitle && <CourseCard/>}
  </Box>
      </>
  )
}
