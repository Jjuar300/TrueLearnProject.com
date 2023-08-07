
import {Box, Typography, OutlinedInput, TextField, Button, InputAdornment} from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

export default function ClassInfo() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
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
      top:'30px', 
      left:'5%', 
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

     </Box>

     <Button
     onClick={() => navigate('/createcourse')}
    sx={{
      position:'relative', 
      border:'1px solid gray', 
      fontSize:'15px', 
      width:'20rem',
      height:'1.5rem',  
      backgroundColor:'black', 
      color:'white', 
      top:'160px', 
      left:'4%', 
      ':hover': {backgroundColor: 'gray'}, 
    }}
    >
      Save
    </Button>

      </form>
     </Formik>
    </Box>

   </>
  )
}
