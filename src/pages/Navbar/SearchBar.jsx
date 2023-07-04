import React, { useState } from 'react'
import { TextField, InputAdornment, IconButton, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import {useSelector, useDispatch} from 'react-redux'
import { handleClose, handleOpen } from '../../state/SearchbarSlice'; 

export default function SearchBar() {
  const open = useSelector(state => state.SearchBarDrawer.open)
  const [onclose, setOnclose] = useState(false)
  const dispatch = useDispatch()

function closeDrawer() {
  setOnclose(!onclose)
}

  return (
<>
     <Drawer
     anchor='top'
     open={open}
     >
      <Box
      sx={{
        height:'500px',
        backgroundColor: '#f8f7f7', 
      }}
      >
        
      <TextField
      name='SearchBar'
      type='text'
      placeholder='what do you want to learn?'
      variant='outlined'
     fullWidth
     
     InputProps={{
      startAdornment:(
        <InputAdornment>
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        </InputAdornment>
      )
     }}
      >
          Search 
      </TextField>

      <Box
      name="onCloseClick"
      onClick={() => dispatch(handleClose())}
     sx={{height:'500px', 
    backgroundColor:'transparent', 
    }}
     >
      </Box>

      </Box>
     </Drawer>

     <SearchIcon
     name='SearchIcon'
      onClick={() => dispatch(handleOpen())}
     sx={{
      position: 'absolute', 
      left:'74%',
      top:'34px', 
     }}
     />
</>
  )
}
