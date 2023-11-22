import { createSlice } from "@reduxjs/toolkit";

const addVideoContentSlice = createSlice({
    name:'addVideoContent', 
    initialState: {
       navigateCourseLandingPage: 'Curriculum', 
        }, 
    reducers: {
       getCourseLandingPage: (state, action) => {
        state.navigateCourseLandingPage = action.payload; 
       }
    }
})

export default addVideoContentSlice.reducer; 
export const {
   getCourseLandingPage, 
} = addVideoContentSlice.actions; 