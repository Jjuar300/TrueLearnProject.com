import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Input } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import axios from 'axios';
import UserTitle from './UserTitle'
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {
    const navigate = useNavigate();
    const [file, setfile] = useState(); 
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 
    const [inputValues, setinputValues] = useState({
        fullname: '', 
        email: '', 
        aboutMe: '', 
        companyName: '', 
        jobTitle: '', 
        linked: '', 
    })

  const uploadUserDetailInputValues = async () => {
    try{
        const{
            fullname, 
            email, 
            aboutMe, 
            companyName, 
            jobTitle, 
            linked, 
        } = inputValues; 

       await axios.post('/uploadusereditdetails', {
        fullname, 
        email, 
        aboutMe, 
        companyName, 
        jobTitle, 
        linked, 
       })
    }catch(error){
        console.log(error)
    }
  }

  const uploadFiles = () => {
    const formData = new FormData(); 
    formData.append('file', file)
    axios.post('/displayvideo', formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    // dispatch(getVideoUrl(file.name))
    // console.log(file.name)
   }

  const handleSaveButton = (e) => {
    e.preventDefault(); 
    uploadUserDetailInputValues();
    uploadFiles(); 
    navigate('/');
  }

    return (
  <>
    <form>
    <Box
   name='userDetails'
   sx={{
    position:'absolute', 
    display:'flex', 
    flexDirection:'column',
    gap:'2rem', 
    top:'30rem',
    left: isNotMobileScreen ? '40%' : '5%', 
    height:'1rem',   
   }}
   >
   
   <Box
   name='fullname'
   sx={{ 
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',  
   }}
   >
   <Typography
    sx={{
        top:'30rem', 
    }}
    >
        Full Name
    </Typography>

    <TextField
    fullWidth
        placeholder='James smith'
        type='text'
        onChange={(e) => setinputValues({...inputValues, fullname: e.target.value})}
        />
   </Box>

   <Box
   name='email'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',  
   }}
   >
   <Typography
    sx={{
        top:'30rem', 
    }}
    >
        Email
    </Typography>

    <TextField
    onChange={(e) => setinputValues({...inputValues, email: e.target.value})}
    fullWidth
        placeholder='James205@gmail.com'
        type='email'
        />
   </Box>

   <Box
   name='About me'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
   }}
   >
   <Typography
    sx={{
        top:'30rem', 
    }}
    >
        About me 
    </Typography>

    <TextField
     onChange={(e) => setinputValues({...inputValues, aboutMe: e.target.value})}
    multiline
        placeholder='Hi im James and...'
        type='text'
        fullWidth
        />
   </Box>
   
   <Box
   name='Company'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
   }}
   >
   <Typography
    sx={{
        position:'relative',  
        top:'1.6rem', 
        width:'5rem', 
    }}
    >
        Company 
    </Typography>

    <Typography
    sx={{ 
        position:'relative', 
        left:'77%', 
        width:'5rem', 
    }}
    >
        (Optional)
    </Typography>

    <TextField
     onChange={(e) => setinputValues({...inputValues, companyName: e.target.value})}
        placeholder='ex://Google'
        type='text'
        fullWidth
        />
   </Box>

   <Box
   name='Linked'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
   }}
   >
   <Typography
    sx={{
        position:'relative',  
        top:'1.6rem', 
        width:'5rem', 
    }}
    >
        Job Title
    </Typography>

    <Typography
    sx={{ 
        position:'relative', 
        left:'77%', 
        width:'5rem', 
    }}
    >
        (Optional)
    </Typography>

    <TextField
     onChange={(e) => setinputValues({...inputValues, jobTitle: e.target.value})}
        placeholder='ex:// Product manager'
        type='text'
        fullWidth
        />
   </Box>


   <Box
   name='Linked'
   sx={{
    display:'flex',
    flexDirection:'column',
    top:'30rem',
    width:'22rem',
   }}
   >
   <Typography
    sx={{
        position:'relative',  
        top:'1.6rem', 
        width:'5rem', 
    }}
    >
        Linked
    </Typography>

    <Typography
    sx={{ 
        position:'relative', 
        left:'77%', 
        width:'5rem', 
    }}
    >
        (Optional)
    </Typography>

    <TextField
     onChange={(e) => setinputValues({...inputValues, linked: e.target.value})}
        placeholder='www.linked.com/in/'
        type='text'
        fullWidth
        />
   </Box>

   </Box>
    </form>

    
   <Box
   classname='box'
   sx={{
    position:'absolute', 
    display:'flex', 
    flexDirection:'column', 
    width: isNotMobileScreen ? '30rem' : '20rem', 
    left: isNotMobileScreen ? '36%' : '7%', 
}}
   >
    <Box
    sx={{
        position:'relative', 
        border:'1px solid #e5dfe1', 
        height:'14rem', 
        top:'5rem', 
        borderRadius:'10px', 
        display:'flex', 
        flexDirection:'column', 
        cursor:'pointer', 
    }}
    >

<Input 
   type="file"
   accept='video/*, image/*'
   onChange={(e) => setfile(e.target.files[0])}
   />

        <Typography
        sx={{
            position:'relative', 
            fontFamily:'roman', 
            top:'5rem',
            left: isNotMobileScreen ? '33%' : '26%', 
            color:'#867c88',
            fontWeight:'bold',
            width:'11rem',    
        }}
        >
            Upload a profile picture
        </Typography>
    </Box>
   </Box>
    <UserTitle handleSaveButton={handleSaveButton} />
  </>
  )
}
