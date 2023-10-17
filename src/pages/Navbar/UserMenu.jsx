import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useMediaQuery }from '@mui/material';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../state/ServerSlice';
import Cookies from 'js-cookie'

export default function UserMenu() {
 const [Anchor, setAnchor] = useState(null); 
const open = Boolean(Anchor); 
const navigate = useNavigate(); 
const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')
const dispatch = useDispatch(); 
const user = useSelector(state => state.ServerSlice.data)
  

const handleClick = (event) => {
 setAnchor(event.currentTarget)
}

const handleclose = () => {
    setAnchor(null)
}


const handlelogout = () => {
  dispatch(getLogout({
    data: Cookies.remove('token') , 
  }))
  navigate('/')
}

  return (
    <>
    { isNotMobileScreen ? <Box
    sx={{
        position:'absolute', 
        left: '86%',
        top:'35px',   
    }}
    >
       <AccountCircleIcon
       onClick={handleClick}
       sx={{
        cursor:'pointer', 
        fontSize:'35px',
       }}
       />

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
