import { Box } from "@mui/material";
import { userCourses } from "../../data/courses.js";
import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    CardActionArea, 
} from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCourseData } from "../../state/DummyCourses/index.js";
import CourseCard from "../../components/Course/CourseCard.jsx";

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
        justifyContent:'center', 
  }}
  >
  {
    userCourses.map((data) =>(
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
    <CourseCard/>
  </Box>
   </>
  )
}
