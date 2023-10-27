import { createSlice } from "@reduxjs/toolkit";


const AccessCourseSlice = createSlice({
    name:'AccessCourse', 
    initialState:{
        section: [], 
    }, 
    reducers:{
        addSection: (state, action) => {
            state.Section = action.payload; 
        }
    }
}); 

export const {
    addSection, 
} = AccessCourseSlice.actions; 
export default AccessCourseSlice.reducer; 