import { createSlice } from "@reduxjs/toolkit";

const AddVideoUrl = createSlice({
    name: 'VideoUrl', 
    initialState: {
        VideoUrl: '',  
        imageUrl: '', 
    }, 
    reducers: {
        getVideoUrl: (state, action) => {
            state.VideoUrl = action.payload; 
        }, 
        getImageUrl: (state, action) => {
            state.imageUrl = action.payload; 
        }
    }
})

export default AddVideoUrl.reducer; 
export const {
getVideoUrl, 
getImageUrl, 
} = AddVideoUrl.actions;