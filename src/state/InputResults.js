import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
    name:'inputs', 
    initialState:{
        isCourseCardTitle: Boolean, 
    }, 
    reducers: {
        handleCourseCardTitle: (state, action) => {
            state.isCourseCardTitle = action.payload; 
        }
    }
})

export const {handleCourseCardTitle} = InputSlice.actions; 
export default InputSlice.reducer; 