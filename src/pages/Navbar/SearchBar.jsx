import React from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <TextField
    name='SearchBar'
    type='text'
    placeholder='what do you want to learn?'
    variant='outlined'
   size='small'
   
   InputProps={{
    startAdornment:(
      <InputAdornment>
      <IconButton>
        <SearchIcon></SearchIcon>
      </IconButton>
      </InputAdornment>
    )
   }}

    sx={{
        position: 'absolute', 
        top: '550px', 
        backgroundColor:'white',
        left:'14%',   
    }}
    >
        Search 
    </TextField>
  )
}
