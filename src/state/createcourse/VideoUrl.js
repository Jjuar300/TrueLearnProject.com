import { createSlice } from "@reduxjs/toolkit";

const AddVideoUrl = createSlice({
    name: 'VideoUrl', 
    initialState: {
        VideoUrl: '',  
        imageUrl: '', 
        accessVideo: '', 
        borderStyle: '',
    }, 
    reducers: {
        getVideoUrl: (state, action) => {
            state.VideoUrl = action.payload; 
        }, 
        getImageUrl: (state, action) => {
            state.imageUrl = action.payload; 
        }, 
        getAccessVideo: (state, action) => {
            state.accessVideo = action.payload; 
        }, 
        getBorderStyle: (state, action) => {
            state.borderStyle = action.payload; 
        }, 
    }
})

export default AddVideoUrl.reducer; 
export const {
getVideoUrl, 
getImageUrl, 
getAccessVideo, 
getBorderStyle, 
} = AddVideoUrl.actions;