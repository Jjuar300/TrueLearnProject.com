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
import { getVideoUrl } from "../../state/createcourse/VideoUrl";

export default function CourseCard() {
const [data, setData] = useState([]); 
const videoFile = useSelector(state => state.videoUrl.VideoUrl);
const navigate = useNavigate(); 
const [searchInput, setSearchInput] = useState(''); 
const dispatch = useDispatch(); 
const [fileName, setFileName] = useState(); 

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
console.log(videoFile ? true : false)


data.filter((data) => {
    dispatch(handleCourseCardTitle(data.title.includes(searchInput)))  
})

    return (
    <>
   {
   data.map((data) => (
        <Card
        onClick={ () =>  navigate('/buycourse')}
        sx={{
            width:'20rem', 
            left:'15rem',
            top:'20rem',  
        }}
        >
            <CardActionArea>
                <CardMedia
               component="video"
                src={`https://d3n6kitjvdjlm1.cloudfront.net/${videoFile}`}
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
