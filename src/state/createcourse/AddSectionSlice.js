import { createSlice } from "@reduxjs/toolkit";

export const AddSectionSlice = createSlice({
    name:"AddSectionSlice", 
    initialState:{
        isSection:null,
    }, 
    reducers:{
       handleSection:(state, action) => {
         state.isSection = action.payload.isSection; 
       }
    }
})


export const {handleSection} = AddSectionSlice.actions; 
export default AddSectionSlice.reducer; 