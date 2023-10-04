import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    CardActionArea, 
} from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import video from '../../assets'

export default function CourseCard() {
const [data, setData] = useState([]); 
const videoFile = useSelector(state => state.videoUrl.VideoUrl);
const navigate = useNavigate(); 

useEffect(() => {
    axios.get('/uploadCourseLandingInputValues')
   .then((response) => setData(response.data))
   .catch((error) => console.log(error))
 },[]);
 

console.log(videoFile)

    return (
    <>
   {
    data.map((data) => (

        <Card
        onClick={() => navigate('/buycourse')}
        sx={{
            position:'absolute', 
            width:'20rem', 
            left:'15rem',
            top:'20rem',  
        }}
        >
            <CardActionArea>
                <CardMedia
               component="video"
               src={`https://res.cloudinary.com/duswtno8e/video/upload/${videoFile}.mp4`}
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
    </>
  )
}
