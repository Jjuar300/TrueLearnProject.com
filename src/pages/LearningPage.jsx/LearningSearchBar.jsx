import React from 'react'
import {Box, Typography, Button, TextField, InputAdornment, IconButton} from '@mui/material'
import { Formik } from 'formik'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <>
   <Formik>
    <form>
      <Box
      sx={{
        position:'relative', 
        top:'5rem', 
      }}
      >
        <Typography
        sx={{
          position:'absolute', 
          top:'-2rem',
          left:'15%',  
          fontSize:'35px', 
          fontFamily:'roman', 
          fontWeight:'bold', 
        }}
        >
          My Learnings
        </Typography>

        <TextField
        variant='outlined'
        fullWidth
        placeholder='Search my Learnings'
        type='search'
        autoComplete='off'
        sx={{
          border:'1px solid black', 
          top:'5rem', 
        }}
        InputProps={{
          endAdornment:(
            <InputAdornment>
             <IconButton>
             <SearchIcon
             sx={{
              position:'absolute', 
              backgroundColor:'black', 
              color:'white', 
              padding:'1rem',
              left:'-1.5rem',  
             }}
             ></SearchIcon>
             </IconButton>
            </InputAdornment>
          )
        }}
        />
      </Box>
    </form>
   </Formik>
    </>
  )
}
