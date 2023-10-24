import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button, Input } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import axios from 'axios';
import UserTitle from './UserTitle'
import { useNavigate } from 'react-router-dom';
import {getImageUrl} from '../../state/createcourse/VideoUrl'
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar'
import Cookies from 'js-cookie'
import Modal from '@mui/material/Modal';

export default function UserDetails() {
    const navigate = useNavigate();
    const dipatch = useDispatch(); 
    const [file, setfile] = useState(); 
    const [isInput, setInput] = useState(true); 
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 
    const [userEditData, setUserEditData] = useState([]);   
    const [isOpen, setOpen] = useState(false);
    const handleOpenModal = () => {setOpen(true)}
    const handleCloseModal = () => {setOpen(false)}

    const [inputValues, setinputValues] = useState({
        fullname: '', 
        email: '', 
        password: '', 
        aboutMe: '', 
        companyName: '', 
        jobTitle: '', 
        linked: '', 
        isUpdated: true, 
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

  const updateUserProfileFullName = async () => {
    try{
     const {
      fullname, 
      email, 
      password, 
     }= inputValues

     await axios.put('/updatefullname', {
        fullname,
        email, 
        password,  
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
    dipatch(getImageUrl(file.name))
   }

   const validInputs = [{
    fullname: inputValues.fullname, 
    email: inputValues.email, 
}]

  useEffect(() => {
    validInputs.map((inputs) => {
         setInput(
            inputs.fullname === '' 
            &&
            inputs.email === ''
            &&
            !file)
    })
  },[validInputs])

  console.log(isInput)

  useEffect(() => {
    axios.get('/userData')
   .then((res) => setUserEditData(res.data))
  },[])

  const handleSaveButton = (e) => {
    e.preventDefault(); 
    uploadUserDetailInputValues();
    updateUserProfileFullName(); 
    uploadFiles(); 
    navigate('/');
  }

  const handleDeleteButton =  async () => {
    try{
        const userId = userEditData[0]._id; 
        await axios.post('/deleteacount', {userId})
        console.log(userId)
    }catch(error){
        console.log(error)
    }
    Cookies.remove('token')
    window.location.reload(); 
  }

    return (
  <>
  <Navbar/>
  <Modal
  open={isOpen}
  onClose={handleCloseModal}
  >
    <Box
    sx={{
        position:'absolute', 
        width:'40rem', 
        height:'20rem', 
        left:'38rem', 
        top:'20rem', 
        backgroundColor:'white',
        color:'black',  
        border:'1px solid black', 
    }}
    >
        <Typography
        sx={{
            position:'relative', 
            top:'2rem',
            left:'2rem', 
            fontFamily:'roman', 
            fontSize:'1.7rem', 
        }}
        >
            Delete Account
        </Typography>
        <Typography
        sx={{
            position:'relative', 
            top:'2rem',
            left:'2rem', 
            fontFamily:'roman', 
            fontSize:'1.3rem', 
            color:'#535454', 
        }}
        >
            Once Deleting your account you won't be able 
            to gain any access to <br/>  your data anymore. 
        </Typography>

        <Button
        onClick={handleDeleteButton}
        sx={{
            width:'10rem', 
            border:'1px solid gray', 
            borderRadius:'0',
            position:'absolute', 
            left:'9rem', 
            top:'12rem', 
            backgroundColor:'#b80d18', 
            color:'white',
            ':hover':{backgroundColor:'#930a13'}   
        }}
        >Delete</Button>

<Button
onClick={handleCloseModal}
        sx={{
            width:'10rem', 
            border:'1px solid gray', 
            borderRadius:'0',
            position:'absolute', 
            left:'21rem', 
            top:'12rem', 
            backgroundColor:'gray', 
            color:'white',
            ':hover':{backgroundColor:'#3d3e3e'}   
        }}
        >Cancel</Button>
    </Box>
  </Modal>
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
    height:'60rem',   
   }}
   >
   
  { 
  userEditData.map((input) => (
    <Box
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
        placeholder={input.firstname}
        type='text'
        onChange={(e) => setinputValues({...inputValues, fullname: e.target.value})}
        />
   </Box>
  ))
   }

  {
    userEditData.map((input) => (
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
             placeholder={input.email}
             type='Email'
             />
        </Box>
    ))
  }

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
             password
         </Typography>
     
         <TextField
         onChange={(e) => setinputValues({...inputValues, password: e.target.value})}
         fullWidth
             placeholder='password'
             type='password'
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
        top:'8rem', 
        borderRadius:'10px', 
        display:'flex', 
        flexDirection:'column', 
        cursor:'pointer', 
    }}
    >
        <Typography
        sx={{
            position:'relative', 
            fontFamily:'roman', 
            top:'10rem',
            left: isNotMobileScreen ? '33%' : '26%', 
            color:'#867c88',
            fontWeight:'bold',
            width:'11rem',    
        }}
        >
            Upload a profile picture
        </Typography>
    </Box>

    <Button
    onClick={handleOpenModal}
        sx={{
            border:'1px solid gray', 
            position:'absolute', 
            left:'35%',
            top:'79rem', 
            backgroundColor:'#b80d18', 
            color:'white',
            ':hover':{backgroundColor:'#930a13'}   
        }}
        >
            Delete Account
        </Button>
   </Box>
   <TextField
   sx={{
    position:'absolute',  
    height:'4rem', 
    top:'16.5rem', 
    left:'45rem', 
    ':hover': {cursor:'pointer'}
   }}
   type="file"
   accept='video/*, image/*'
   onChange={(e) => setfile(e.target.files[0])}
   />
    {<UserTitle handleSaveButton={handleSaveButton} isInput={isInput} />}
  </>
  )
}
