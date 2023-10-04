import { Box } from "@mui/material";
import { userCourses } from "../../data/courses.js";
import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    CardActionArea, 
} from "@mui/material";
import AIimage from '../../assets/userCourses/AI Images/andrea-de-santis-zwd435-ewb4-unsplash.jpg'

export default function DummyCourses() {
  return (
   <>
  <Box
  sx={{
    position:'absolute', 
        display:'flex',
        flexWrap:'wrap', 
        gap:'2rem', 
        width:'100rem', 
        left:'14rem',
        top:'16rem',  
  }}
  >
  {
    userCourses.map((data) =>(
    
   
        <Card
    sx={{
        width:'20rem', 
        left:'15rem',
        top:'20rem',   
    }}
    >
        <CardActionArea>
            <CardMedia 
            component='img'
            height={140}
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
            </CardContent>
        </CardActionArea>
    </Card>
    
    ))
   }
  </Box>
   </>
  )
}
