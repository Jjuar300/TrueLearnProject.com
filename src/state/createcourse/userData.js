import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
    name:"userData", 
    initialState: {
        userName: '', 
        userEmail: '', 
        userId: '', 
    },
    reducers:{
      getUserData: (state, action) => {
        const {
          newUserName, 
          newUserEmail, 
          Id, 
        } = action.payload; 
        state.userName = newUserName; 
        state.userEmail = newUserEmail;
        state.userId = Id; 
      }
    }
})

export default userData.reducer
 export const {
 getUserData, 
} = userData.actions