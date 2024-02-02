import { useState } from 'react'
import { Typography} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getDelete } from '../../state/MyCourses/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import {Box} from '@mui/material';
import axios from 'axios';

export default function Courses() {
  const [Anchor, setAnchor] = useState(null); 
  const isOpen = Boolean(Anchor)
  const dispatch = useDispatch(); 
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)');
  const Delete = useSelector(state => state.UserMenu.Delete); 
  const courseId = useSelector(state => state.CourseData.Id);

  const handleClick = (event) => {
   return setAnchor(event.currentTarget)
  }

  const handleClose = () => {
    return setAnchor(null)
  }

  const handleDelete = async () => {
    await axios.post('/deletecoursecard', {courseId})
  }

 const handleDeleteCourseCard = () => {
  dispatch(getDelete({ Delete: false }))
   handleDelete(); 
  }

  return (
    <>
  { Delete && <Box> 
    <MoreVertIcon
 onClick={handleClick}
        sx={{
          position:'absolute', 
          zIndex:'1',  
          top:'16.5rem', 
          fontSize:'1.2rem',
          color: 'black',
          left:'31rem', 
          ':hover': {cursor: 'pointer'},  
          backgroundColor: 'white',
          padding:'.5rem',    
        }}
    />

    <Menu
    anchorEl={Anchor}
    open={isOpen}
    onClose={handleClose}
    >
      { Delete && <MenuItem
      onClick={handleDeleteCourseCard}
      >
       Delete
      </MenuItem>}
    </Menu>
    </Box>}

     <Typography
     sx={{
      position:'absolute', 
      top: isNotMobileScreen ? '10rem' : '8rem',
      fontSize:'30px', 
      fontFamily:'roman', 
      fontWeight:'bold', 
      left: isNotMobileScreen ? '13%' : 'none',  
     }}
     >
        My courses
       </Typography>
    </>
  )
}
