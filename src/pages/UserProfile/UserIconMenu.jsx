import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { handleOpen } from '../../state/CancelButtonSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

export default function UserIconMenu() {
const dispatch = useDispatch(); 

  return (
   <>
    <AccountCircleIcon
    onClick={() => dispatch(handleOpen())}
   sx={{
    border:'1px solid #1c0847',
    borderRadius:'10px', 
    position:'relative', 
    left:'84%',
    top:'31px',  
    padding:'.1rem',
    width:'3rem',  
   }}
   />
   </>
  )
}
