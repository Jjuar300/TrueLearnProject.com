import React  from 'react'
import UploadVideo from './UploadVideo'
import CourseInfo from './CourseInfo'
import { Box, Button, Typography } from '@mui/material'
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector, useDispatch } from 'react-redux';
import { 
  handleSwitchToUploadCourseInfo, 
  handleSwitch, 
} from '../../state/createcourse/indexSlice';

export default function CreateCourse() {
const uploadVideo = useSelector(state => state.CreatingCourse.uploadVideo)
const uploadCourseInfo = useSelector(state => state.CreatingCourse.uploadCourseInfo )
const dispatch = useDispatch(); 

  return (
    <>

      <Typography variant='h5' 
      sx={{
        position:'absolute', 
        fontFamily:'roman', 
        fontWeight:'bold', 
        top:'2rem',
        left:'17%',  
        color:'#1b0032', 
      }}
      >
        Create with TrueLearn
      </Typography>

      <Box
      name='guide'
      sx={{
        position:'absolute', 
        display:'flex', 
        flexDirection:'column', 
        gap:'2rem', 
        top:'10rem',
        left:'25%' 
      }}
      >
        <Box
        onClick={() => dispatch(handleSwitch())}
        sx={{
          top:'8rem', 
          display:'flex', 
          flexDirection:'column', 
          left:'25%', 
        }}
        >
          <FeaturedVideoIcon
          sx={{
            border:'1px solid gray',
            top:'10rem',
            left:'25%',  
            fontSize:'10rem',
             color:'#ccbdbe',
             padding:'1rem', 
             backgroundColor:'#fbf9f9',  
          }}
          />
              <Typography
              sx={{
                position:'relative', 
                top:'-24px',
                left:'15%', 
                opacity:'.5', 
                fontFamily:'roman',  
              }}
              >
              Upload videos
            </Typography>
        </Box>

        <Box
        onClick={() => dispatch(handleSwitchToUploadCourseInfo())}
        sx={{
          top:'8rem', 
          display:'flex', 
          flexDirection:'column', 
          left:'25%', 
        }}
        >
          <InfoIcon
          sx={{
            border:'1px solid gray',
            top:'10rem',
            left:'25%',  
            fontSize:'10rem',
             color:'#ccbdbe',
             padding:'1rem', 
             backgroundColor:'#fbf9f9',  
          }}
          />
              <Typography
              sx={{
                position:'relative', 
                top:'-24px',
                left:'30%', 
                opacity:'.5', 
                fontFamily:'roman',  
              }}
              >
              Course info
            </Typography>
        </Box>

        <Button
    sx={{
      position:'relative', 
      border:'1px solid gray', 
      fontSize:'15px', 
      width:'20rem',
      height:'1.5rem',  
      backgroundColor:'#28034c', 
      color:'white', 
      top:'30px', 
      left:'-20%', 
      ':hover': {backgroundColor: 'gray'}, 
    }}
    >
      Create Course
    </Button>
      </Box>

    </>
  )
}
