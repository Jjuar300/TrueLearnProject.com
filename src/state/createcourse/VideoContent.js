import { createSlice } from "@reduxjs/toolkit";

const addVideoContentSlice = createSlice({
    name:'addVideoContent', 
    initialState: {
        fileName: null, 
    }, 
    reducers: {
        updateFileName: (state, action) => {
            state.fileName = action.payload; 
        }
    }
})

export default addVideoContentSlice.reducer; 
export const {
    updateFileName, 
} = addVideoContentSlice.actions; 