
import {Box, Typography, OutlinedInput, TextField, InputAdornment} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from '@mui/icons-material/Add';
import UploadContent from '../../components/UploadContent'

const Catergories = [
  {
    value:'Artificial Inteligence',
    label:'Artificial Inteligence',  
  }, 
  {
    value:'Product Management', 
    label:'Product Management', 
  }, 
  {
    value:'Robotics', 
    label:'Robotics', 
  }, 
  {
    value:'Graphic design', 
    label:'Graphic design', 
  }, 
  {
    value:'Engineering', 
    label:'Engineering', 
  }
]

const AddingIcon = <AddIcon
sx={{
 position:'absolute', 
 left:'44%',
 fontSize:'40px', 
 top:'2rem', 
}}
/>

export default function ClassInfo() {
  const isNotMobileScreen = useMediaQuery('(min-width:1000px)'); 

  return (
   <>
    <Box
    sx={{
      position:'absolute', 
      left: isNotMobileScreen ? '40%' : 'none', 
      top: isNotMobileScreen ? '10rem' :'none'
    }}
    >
    <Formik>
      <form>
      <Box
     name='courseoverview'
     sx={{
      position:'absolute', 
      display:'flex', 
      flexDirection:'column',
      flexWrap:'wrap',  
      gap:'1rem', 
      top:'50px', 
      left:'5%', 
      width:'15rem', 
     }}
     >
      <Typography variant='h5'>
        Course Overview
      </Typography>
      <Typography>
        Add course details to help learn 
        more about your course. 
      </Typography>
     </Box>
      
     <Box
     name="details"
     sx={{
      position:'absolute',
      display:'flex', 
      flexDirection:'column', 
      top:'15rem',
      left:'8%',
      gap:'2rem', 
      flexWrap:'wrap',  
      height:'40rem', 
     }}
     >
      <Box
      sx={{ 
        top:'12rem', 
        left:"10%", 
      }}
      >
        <Typography
        sx={{
          fontWeight:'bold', 
          color:'#453d43', 
        }}
        >
          Course Title
        </Typography>

        <OutlinedInput
        placeholder='My course'
        sx={{
          width:'20rem', 
          height:'2rem', 
        }}
        />

      </Box>

      <Box
      >
        <Typography
        fontWeight='bold'
        >
          Course description
        </Typography>

        <TextField
        multiline
        placeholder='This course...' 
        sx={{
          width:'20rem',
        }}
        />
      </Box>

      <Box
      >
        <Typography
        fontWeight='bold'
        >
          Price of course
        </Typography>

        <TextField
        InputProps={{
          startAdornment:(
            <InputAdornment>
            <AttachMoneyIcon/>
            </InputAdornment>
          )
        }}
        sx={{
          width:'20rem',
        }}
        />
      </Box>

      <Box
      >
        <TextField
        select
        label='Catergory'
        defaultValue='Artificial Inteligence'
        sx={{
          width:'20rem', 
        }}
        >
      {Catergories.map((option) =>(
        <MenuItem key={option.value} value={option.value} > 
        {option.label}
        </MenuItem>
      ))}

          </TextField>

      </Box>

      <Box
    name='previewvideo'
    sx={{
      position:'absolute', 
      width: isNotMobileScreen ? '10rem' : '5rem',
      height:'4rem', 
      padding:'.5rem',
      top:'26rem', 
      left:'-20%'
    }}
    >
    
  <Typography
  sx={{
    position:'relative', 
    width:'15rem', 
  }}
  >
    Upload Preview video here
  </Typography>

    <Box
    sx={{
      position:'absolute', 
      border:'1px solid black', 
      width:'30rem', 
      height:'7rem', 
      left:'2%', 
      top:'39px', 
      borderStyle: 'dashed', 
      cursor:'pointer', 
    }}
    >
      <UploadContent
      height={'7rem'}
      Icons={AddingIcon}
      />
    </Box>
    </Box>

     </Box>

      </form>
     </Formik>
    </Box>

   </>
  )
}
