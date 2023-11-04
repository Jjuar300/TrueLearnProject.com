import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    CardActionArea, 
} from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleCourseCardTitle } from "../../state/InputResults";

export default function CourseCard() {
const [data, setData] = useState([]); 
const videoFile = useSelector(state => state.videoUrl.VideoUrl);
const navigate = useNavigate(); 
const [searchInput, setSearchInput] = useState(''); 
const dispatch = useDispatch(); 
const [fileName,setFileName] = useState(); 

useEffect(() => {
 axios.get('/getvideofilename')
 .then((response) => setFileName(response.data[0].fileName))
 .catch((error) => console.log(error))
},[])

useEffect(() => {
    axios.get('/uploadCourseLandingInputValues')
   .then((response) => setData(response.data))
   .catch((error) => console.log(error))
 },[]);
 
 useEffect(() => {
    axios.get('/getsearchinputs')
    .then((response) => setSearchInput(response.data[0].inputResult))
    .catch((error) => console.log(error))
   },[])

console.log(videoFile)

data.filter((data) => {
    dispatch(handleCourseCardTitle(data.title.includes(searchInput)))  
})

    return (
    <>
   {
   data.map((data) => (
        <Card
        onClick={() => navigate('/buycourse')}
        sx={{
            width:'20rem', 
            left:'15rem',
            top:'20rem',  
        }}
        >
            <CardActionArea>
                <CardMedia
               component="video"
                src={`https://res.cloudinary.com/duswtno8e/video/upload/v1696645141/${videoFile}.mp4`}
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
