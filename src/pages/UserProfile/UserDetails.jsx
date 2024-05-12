import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import UserTitle from './UserTitle'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Navbar from '../Navbar'
import Modal from '@mui/material/Modal';
import { useUser, useClerk } from '@clerk/clerk-react';
import UploadFile from '../../components/UploadFile';
import { uploadUserProfileImage } from '../../state/components/UserFile';
import EditIcon from '@mui/icons-material/Edit';

export default function UserDetails() {
  
    const {user} = useUser(); 
    const clerk = useClerk(); 

    const userProfileImage = useSelector(state => state.UserFile.userProfileImage)
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [file, setfile] = useState();
    const [isInput, setInput] = useState(true); 
    const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 
    const [isOpen, setOpen] = useState(false);
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false); 
    const handleOpenModal = () => {setOpen(true)}
    const handleCloseModal = () => {setOpen(false)}
    const handlePasswordButtonChange = async () => {
        await clerk?.user.updatePassword({
            currentPassword: inputValues.current_password, 
            newPassword: inputValues.password, 
        })
        setPasswordModalOpen(false)
    }

    const [userImage, setUserImage] = useState(); 

    const [inputValues, setinputValues] = useState({
        fullname: '', 
        email: '', 
        password: '',
        current_password:'',  
        aboutMe: '', 
        companyName: '', 
        jobTitle: '', 
        linked: '', 
        isUpdated: true,  
    })

    const validateInputs = [{
        fullname: inputValues.fullname,  
    }]
    
    useEffect(() => {
        validateInputs.map((inputs) => {
            setInput(
                inputs.fullname === '' 
                &&
                !file
            )
                
        })
      },[validateInputs])

   const handleUserProfileUpdate = async () => {
     await clerk?.user.update({firstName: inputValues.fullname}); 
  }

 const handleUserProfileImage = () => {
    const userAvatarImage = !userImage ? userProfileImage : userImage?.name;
   return  dispatch(uploadUserProfileImage(userAvatarImage));  
}

  const handleSaveButton = () => {
    const isFullName = Boolean(inputValues.fullname !== ''); 
    isFullName && handleUserProfileUpdate(); 
    handleUserProfileImage(); 
    navigate('/');
  }

  const handleDeleteButton = async () => {
   await user?.delete()
    navigate('/')
  }

  const handleFileChange = (e) => { 
    setfile(e.target.files[0])
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
        placeholder={user?.firstName}
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
             placeholder={user?.emailAddresses}
             type='Email'
             disabled={true}
             />
        </Box>

        <Modal
  open={isPasswordModalOpen}
  onClose={ () => setPasswordModalOpen(false)}
  >

<Box
sx={{
    position:'absolute', 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center', 
    flexDirection:'column', 
    gap:'2rem', 
    backgroundColor:'white', 
    width:'40rem',
    height:'20rem',  
    left:'38rem', 
    top:'20rem',
}}
>

     <Typography
     sx={{
        position:'absolute', 
        top:'2rem',
        left:'2.6rem',
        fontSize:'1.5rem',   
     }}
     >
        Change Password
     </Typography>

         <TextField
         sx={{
            width:'35rem', 
         }}
         onChange={(e) => setinputValues({...inputValues, password: e.target.value})}
             placeholder='Enter new password'
             type='password'
             />
        
         <TextField
          sx={{
            width:'35rem', 
         }}
         onChange={(e) => setinputValues({...inputValues, current_password: e.target.value})}
             placeholder='Enter current Password'
             type='password'
             />
      
      <Button
      onClick={handlePasswordButtonChange}
       sx={{
        position:'absolute', 
        color: 'white',
        backgroundColor:'black',  
        top:'16rem', 
        left:'25rem', 
        ':hover' : {backgroundColor:'gray'}, 
       }}
      >
        Change password
      </Button>
  
</Box>

  </Modal>

        <Box
        name='password'
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
           Change Password
         </Typography>
     
         <TextField
         onChange={(e) => setinputValues({...inputValues, password: e.target.value})}
         fullWidth
             placeholder='************'
             type='password'
             disabled={true}
             />
        
          <Button
          onClick={() => setPasswordModalOpen(true)}
          sx={{
            position:'relative', 
            backgroundColor:'black', 
            color:'white', 
            width:'3rem',
            height:'3rem', 
            left:'22.5rem',
            top:'-3.3rem', 
            ':hover': {
                backgroundColor: 'gray'
            }  
          }}
          >
           <EditIcon/>
          </Button>
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

   </Box>

   <Box
    sx={{
        position:'absolute', 
        width:'10rem',
        height:'4rem', 
        margin:'3rem',
        left:'43%',
        top:'89rem',   
    }}
    >
    <Button
    onClick={handleOpenModal}
        sx={{
            border:'1px solid gray', 
            position:'relative',  
            backgroundColor:'#b80d18', 
            color:'white',
            ':hover':{backgroundColor:'#930a13'}, 
        }}
        >
            Delete Account
        </Button>
    </Box>

    <UploadFile
    handleFileChange={handleFileChange}
    file={file}
    setUserImage={setUserImage}
    />

    {<UserTitle handleSaveButton={handleSaveButton} isInput={isInput} />}
  </>
  )
}
