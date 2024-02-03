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
import Avatar from '@mui/material/Avatar';
import { SignOutButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
import { updateUserPosition } from '../../state/components/UserFile';

export default function UserMenu() { 
const [Anchor, setAnchor] = useState(null); 
const open = Boolean(Anchor); 
const navigate = useNavigate(); 
const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
const dispatch = useDispatch(); 
const {user} = useUser(); 
const urlEndPoint = 'https://ik.imagekit.io/4pwok1cjp/'; 
const userProfileImage = useSelector(state => state.UserFile.userProfileImage)

console.log(userProfileImage)

const handleUserProfileMenuItem = () => {
  console.log('userProfile was clicked')
  dispatch(updateUserPosition(true))
  navigate('/userprofile')
}

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

  return (
    <>
    { isNotMobileScreen ? <Box
    sx={{
        position:'absolute', 
        left: '86%',
        top:'45px',   
    }}
    >
       
      <Avatar
      onClick={handleClick}
      sx={{
        cursor:'pointer', 
        fontSize:'35px',
       }}
     src={`${urlEndPoint}${userProfileImage}`}
/>
          <Typography
          sx={{
           position:'absolute', 
           width:'10rem',
           left:'3rem',
           top:'0.5rem',  
          }}
          >
           {user?.fullName} 
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
            onClick={handleUserProfileMenuItem}
            >Edit Profile</MenuItem>
            <Divider/>
            <SignOutButton>
            <MenuItem
            onClick={handlelogout}
            >Logout</MenuItem>
            </SignOutButton>
        </Menu>
    </Box>
  :
  null  
  }
    </>
  )
}
