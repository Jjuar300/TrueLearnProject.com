import { createSlice } from "@reduxjs/toolkit";

export const IndexSlice =  createSlice({
    name:'IndexSlice', 
    initialState:{
        uploadVideo: true, 
        uploadCourseInfo: true,
    }, 
    reducers:{
        handleSwitch: state => {state.uploadVideo = state.uploadVideo ? false : true}, 
        handleSwitchToUploadCourseInfo: state => {state.uploadCourseInfo = state.uploadCourseInfo ? false : true}, 
    }
})



export const {
    handleSwitchToUploadCourseInfo, 
    handleSwitch, 
} = IndexSlice.actions; 
export default IndexSlice.reducer; 