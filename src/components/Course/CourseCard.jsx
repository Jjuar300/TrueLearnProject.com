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

export default function CourseCard() {
const [data, setData] = useState([]); 
const videoFile = useSelector(state => state.videoUrl.VideoUrl);
const navigate = useNavigate(); 
const [searchInput, setSearchInput] = useState(''); 

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
const filterData = data.filter((data) => {
    return searchInput === ''
    ? data 
    : data.title.includes(searchInput)
   })

    return (
    <>
   {
   filterData.map((data) => (
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
               component="img"
                image={`https://res.cloudinary.com/duswtno8e/image/upload/v1696645141/${decodeURIComponent(videoFile)}.jpg`}
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
