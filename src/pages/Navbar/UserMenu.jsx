import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useMediaQuery }from '@mui/material';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../state/ServerSlice';
import Cookies from 'js-cookie'
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { getUserData } from '../../state/createcourse/userData';

export default function UserMenu() { 
const [Anchor, setAnchor] = useState(null); 
const open = Boolean(Anchor); 
const navigate = useNavigate(); 
const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
const dispatch = useDispatch(); 
const [userEditData, setUserEditData] = useState([]);   
const userEmail = useSelector(state => state.UserSignIn.userEmail)

let firstname; 
let newImageUrl; 
let userId; 
let Email; 

 userEditData.filter((data) => {
   if(data.email === userEmail){
       userId = data._id
       firstname = data.firstname
       newImageUrl = data.picturepath
       Email = data.email
      }
})

dispatch(getUserData({
  newUserName: firstname, 
  newUserEmail: Email, 
  Id: userId, 
}))

const handleClick = (event) => {
 setAnchor(event.currentTarget)
}

const handleclose = () => {
    setAnchor(null)
}

const handlelogout = () => {
  dispatch(getLogout({
    data: Cookies.remove('token'), 
  }))
  navigate('/')
}

useEffect(() => {
  axios.get('/userData')
 .then((res) => setUserEditData(res.data))
},[])

  return (
    <>
    { isNotMobileScreen ? <Box
    sx={{
        position:'absolute', 
        left: '86%',
        top:'35px',   
    }}
    >
       
      <Avatar
      onClick={handleClick}
      sx={{
        cursor:'pointer', 
        fontSize:'35px',
       }}
      src={`https://d3n6kitjvdjlm1.cloudfront.net/${newImageUrl}`}
      />

          <Typography
          sx={{
           position:'absolute', 
           width:'10rem',
           left:'3rem',
           top:'0.5rem',  
          }}
          >
           {firstname} 
          </Typography>

       <Menu
       anchorEl={Anchor}
        open={open}
        onClose={handleclose}
        >
            <MenuItem
            onClick={() => navigate('/mylearnings')}
            >My learnings</MenuItem>
            <MenuItem
            onClick={() => navigate('/mycourses')}
            >
            My courses
            </MenuItem>
            <MenuItem
            onClick={() => navigate('/userprofile')}
            >Edit Profile</MenuItem>
            <Divider/>
            <MenuItem
            onClick={handlelogout}
            >Logout</MenuItem>
        </Menu>
    </Box>
  :
  null  
  }
    </>
  )
}
