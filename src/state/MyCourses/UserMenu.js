import { createSlice } from "@reduxjs/toolkit";

const UserMenu = createSlice({
    name: 'userMenu', 
    initialState:{
        Delete: Boolean, 
    }, 
    reducers: {
        getDelete: (state, action) => {
            state.Delete = action.payload.Delete; 
        } 
    }
});

export const {getDelete} = UserMenu.actions; 
export default UserMenu.reducer; 