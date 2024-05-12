import { createSlice } from "@reduxjs/toolkit";

export const courseData = createSlice({
    name: 'courseData',
    initialState: {
            Id: Object, 
            title: String, 
            description: String, 
            price: Boolean, 
            category: String, 
            filename: String, 
    },
    reducers:{
        getCourseData: (state, action) => {
         state.title = action.payload.title; 
         state.description = action.payload.description; 
         state.price = action.payload.price; 
         state.category = action.payload.category; 
         state.filename = action.payload.filename; 
         state.Id = action.payload.Id
        }, 
    }
})

export const {
    getCourseData, 
} = courseData.actions; 
export default courseData.reducer; 