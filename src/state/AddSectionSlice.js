import { createSlice } from "@reduxjs/toolkit";

export const AddSectionSlice = createSlice({
    name:"AddSectionSlice", 
    initialState:{
        isSection:false,
    }, 
    reducers:{
        handleOpenSection: state => {state.isSection = true}, 
        handleCloseSection: state => {state.isSection = false}
    }
})


export const {handleCloseSection, handleOpenSection} = AddSectionSlice.actions; 
export default AddSectionSlice.reducer; 