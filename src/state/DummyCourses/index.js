import { createSlice } from "@reduxjs/toolkit";

export const DummyCourseDataSlice = createSlice({
    name: 'DummyCourseData', 
    initialState: {
        title: '', 
        description: '', 
        price: '', 
        image:'', 
    }, 
    reducers: {
        getCourseData: (state, action) => {
         state.title = action.payload.title;  
         state.description = action.payload.description;  
         state.price = action.payload.price; 
         state.image = action.payload.image;  
        }
    }
})

export const {
getCourseData, 
} = DummyCourseDataSlice.actions; 

export default DummyCourseDataSlice.reducer; 