import { createSlice } from "@reduxjs/toolkit";

const AddVideoUrl = createSlice({
    name: 'VideoUrl', 
    initialState: {
        VideoUrl: '',  
        imageUrl: '', 
        accessVideo: [], 
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
        }
    }
})

export default AddVideoUrl.reducer; 
export const {
getVideoUrl, 
getImageUrl, 
getAccessVideo, 
} = AddVideoUrl.actions;