import { createSlice } from "@reduxjs/toolkit";

export const courseData = createSlice({
    name: 'courseData',
    initialState: {
            title: String, 
            description: String, 
            price: Boolean, 
            category: String, 
    },
    reducers:{
        getCourseData: (state, action) => {
         state.title = action.payload.title; 
         state.description = action.payload.description; 
         state.price = action.payload.price; 
         state.category = action.payload.category; 
        }, 
    }
})

export const {
    getCourseData, 
} = courseData.actions; 
export default courseData.reducer; 