import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'UserSlice', 
    initialState:{
        token: null, 
        data: null, 
    }, 
    reducers:{
        gettoken: (state, action) => {
            state.token = action.payload.token;
        }, 

        getData: (state, action) => {
            state.data = action.payload; 
        }, 
        getLogout:( state, action) => 
           { state.data = null }
        
    }
})


export const {
    gettoken,
    getData, 
    getLogout,
} = UserSlice.actions; 
export default UserSlice.reducer; 