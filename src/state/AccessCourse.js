import { createSlice } from "@reduxjs/toolkit";


const AccessCourseSlice = createSlice({
    name:'AccessCourse', 
    initialState:{
        section: [], 
        sectionNumber: Number, 
    }, 
    reducers:{
        addSection: (state, action) => {
            state.section = action.payload; 
        }, 

        addSectionNumber: (state, action) => {
            state.sectionNumber = action.payload; 
        }
    }
}); 

export const {
    addSection, 
    addSectionNumber,
} = AccessCourseSlice.actions; 
export default AccessCourseSlice.reducer; 