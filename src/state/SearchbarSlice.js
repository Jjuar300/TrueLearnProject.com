import { createSlice } from "@reduxjs/toolkit";


export const SearchBarDrawer = createSlice({
    name: 'SearchBarDrawer', 
    initialState: {open: false}, 
    reducers: {
        handleClose: state => {state.open = false},
        handleOpen: state => {state.open = true}
    }
})


export const {handleClose, handleOpen} = SearchBarDrawer.actions; 
export default SearchBarDrawer.reducer; 