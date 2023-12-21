import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    CardActionArea, 
} from "@mui/material";

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleCourseCardTitle } from "../../state/InputResults";
import {GetData} from "../../helper/getData";
import { getCourseData } from "../../state/courseInfo/CourseData";

export default function CourseCard() {

const [data, setData] = useState([]); 
const videoFile = useSelector(state => state.videoUrl.VideoUrl);
const navigate = useNavigate(); 
const [searchInput, setSearchInput] = useState(''); 
const dispatch = useDispatch(); 
const userId = useSelector(state => state.userData.userId)
const courseTitle = useSelector(state => state.CourseData.title)
const courseDescription = useSelector(state => state.CourseData.description)

 GetData('/uploadCourseLandingInputValues', setData)

 data.filter((data) => {
    if(data.userId === userId){
     dispatch(getCourseData({
        title: data.title,
        description: data.description ,
        price: data.price,
        category: data.category,
        filename: data.filename,
     }))
    }
 });

 useEffect(() => {
    axios.get('/getsearchinputs')
    .then((response) => setSearchInput(response.data[0].inputResult))
    .catch((error) => console.log(error))
   },[])

data.filter((data) => {
    dispatch(handleCourseCardTitle(data.title.includes(searchInput)))  
})
    return (
    <>
   {
    <Card
        onClick={ () =>  navigate('/buycourse')}
        sx={{
            width:'20rem', 
            left:'15rem',
            top:'20rem', 
            ':hover': {cursor:'pointer',} 
        }}
        >
                <CardMedia
               component="video"
                src={`https://d3n6kitjvdjlm1.cloudfront.net/${videoFile}`}
            />
                <CardContent
                >
                    <Typography
                    gutterBottom
                    variant="h5"
                    component='div'
                    >
                       {courseTitle}
                    </Typography>
                    <Typography>
                       {courseDescription}
                    </Typography>
                </CardContent>
        </Card>
   }
    </>
  )
}
