import { createSlice } from "@reduxjs/toolkit";



export const Authentication = createSlice({
name:'Authentication', 
initialState: {
    signin: true,
    signup: true,  
}, 
reducers: {
getSwitchToSignup: state => {
    state.signup = false
    state.signin = true
}, 
getSwitchToSignin: state => {
    state.signin = false
    state.signup = true
}
} 

})


export const {
    getSwitchToSignin, 
    getSwitchToSignup
} = Authentication.actions; 
export default Authentication.reducer; 