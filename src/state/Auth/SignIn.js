import { createSlice } from "@reduxjs/toolkit";

const userSignIn = createSlice({
    name:'userSignIn', 
    initialState:{
        userEmail: '', 
    }, 
    reducers:{
        getUserEmail: (state, action) => {
            state.userEmail = action.payload
        }
    }
})

export const {
  getUserEmail, 
} = userSignIn.actions; 
export default userSignIn.reducer; 