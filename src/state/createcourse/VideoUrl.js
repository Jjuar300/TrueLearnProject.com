import { createSlice } from "@reduxjs/toolkit";

const AddVideoUrl = createSlice({
    name: 'VideoUrl', 
    initialState: {
        VideoUrl: '',  
    }, 
    reducers: {
        getVideoUrl: (state, action) => {
            state.VideoUrl = action.payload; 
        }
    }
})

export default AddVideoUrl.reducer; 
export const {
getVideoUrl, 
} = AddVideoUrl.actions;