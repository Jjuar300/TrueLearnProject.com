import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment, IconButton, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import {useSelector, useDispatch} from 'react-redux'
import { handleClose, handleOpen } from '../../state/SearchbarSlice'; 
import { Formik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate(); 
  const open = useSelector(state => state.SearchBar.open)
  // const [isUpdated, setUpdated] = useState(true);
  const [searchInputData, setSearchInputData] = useState();
  const [searchInput, setSearchInput] = useState();  
  const [search, setSearch] = useState({
    searchInput: '', 
    isUpdated: true, 
  });
  const dispatch = useDispatch()
  const isNotMobileScreen = useMediaQuery('(min-width: 1000px)')

  useEffect(() => {
    axios.get('/getsearchinputs')
    .then((response) => setSearchInputData(response.data[0].updateInput))
    .catch((error) => console.log(error))
  
  },[])

 const handleSearchInput = async (e) => {
    e.preventDefault()
    const {
      searchInput, 
      isUpdated, 
    } = search; 

    try{
    await axios.post('/searchinputs', {
        searchInput,
        isUpdated,  
      })
    
    }catch(error){
      console.log(error)
    }
  }

  const upadateSearchInputs = async (e) => {
    // e.preventDefault(); 
    const {
      searchInput, 
    } = search;
  try{
   await axios.put('/upadatesearchinputs',{
    searchInput, 
   } )
  }catch(error){
    console.log(error)
  }
  }

  const handleInputs = (e) => {
    !searchInputData && handleSearchInput(e)
    upadateSearchInputs();
  navigate('/searchresult');
}

console.log(searchInputData)
// console.log(isUpdated)

  return (
<>
  { 
  
  isNotMobileScreen ?

<form
onSubmit={handleInputs}
>
  
<Box
    sx={{
      position:'absolute',  
      left:'13%', 
      top:'1.5rem', 
      width:'50rem', 
    }}
    >
      
    <TextField
    onChange={(event) => setSearch({ ...search, searchInput: event.target.value})}
    name='SearchBar'
    type='search'
    placeholder='what do you want to learn?'
    variant='outlined'
    fullWidth
     
    InputProps={{
    startAdornment:(
      <InputAdornment>
      <IconButton>
        <SearchIcon
        onClick={handleInputs}
        ></SearchIcon>
      </IconButton>
      </InputAdornment>
    )
    }}
    >
        Search 
    </TextField>
    </Box>
</form>
  
  : <Box>
  <Drawer
    anchor='top'
    open={open}
    >
    <Formik>
    <form>
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
    </form>
    </Formik>
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
  </Box>}

</>
  )
}
