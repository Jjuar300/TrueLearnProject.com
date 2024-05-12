import { createSlice } from "@reduxjs/toolkit";

const UserFile = createSlice({
    name:'userFile', 
    initialState:{
        isFilePosition: false,
        userProfileImage: '', 
    }, 
    reducers: {
        updateUserPosition: (state, action) => {
            state.isFilePosition = action.payload; 
        }, 
        uploadUserProfileImage: (state, action) => {
            state.userProfileImage = action.payload; 
        }
    }
})

export const {
    updateUserPosition, 
    uploadUserProfileImage, 
} = UserFile.actions;
export default UserFile.reducer; 