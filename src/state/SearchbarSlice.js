import { createSlice } from "@reduxjs/toolkit";


export const SearchBarDrawer = createSlice({
    name: 'SearchBarDrawer', 
    initialState: {
        open: false,
        searchInput: '', 
    }, 
    reducers: {
        handleClose: state => {state.open = false},
        handleOpen: state => {state.open = true}, 
        getSearchInputValue: (state, action) => {
            state.searchInput = action.payload.searchInput;
        }
    }
})


export const {
    handleClose, 
    handleOpen, 
    getSearchInputValue, 
} = SearchBarDrawer.actions; 
export default SearchBarDrawer.reducer; 