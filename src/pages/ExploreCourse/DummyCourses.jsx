import { Box, keyframes } from "@mui/material";
import { userCourses } from "../../data/courses.js";
import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCourseData } from "../../state/DummyCourses/index.js";
import CourseCard from "../../components/Course/CourseCard.jsx";
import {motion} from 'framer-motion'

export default function DummyCourses() {

    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 

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
  <Box
  sx={{
        position:'absolute', 
        display:'flex',
        flexWrap:'wrap', 
        gap:'2rem', 
        width:'100rem', 
        top:'16rem',  
        left:'10rem', 
        justifyContent:'left', 
  }}
  >
  {
    userCourses.map((data) =>(
     <motion.div
     whileHover={{opacity:0.7}}
     >
           <Card
        onClick={() => handleCardClick(data.id)}
        key={data.id}
        sx={{
        width:'20rem',
        height:'20rem', 
        left:'15rem',
        top:'20rem',   
        objectFit:'cover',
        ':hover': { cursor:'pointer', } 
    }}
    >

           <CardMedia 
                component='img'
                sx={{
                    objectFit:'cover',
                    height:'10rem',
                    width:'20rem',
                }}
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
    </Card>
     </motion.div>
    ))
   }
    <CourseCard/>
  </Box>
   </>
  )
}
