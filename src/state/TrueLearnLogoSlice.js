import { createSlice } from "@reduxjs/toolkit";
import HomePage from "../pages/Homepage";

export const TrueLearnLogo = createSlice({
    name:'TrueLearnLogoClick', 
    initialState:{
    isHomePage: true
    }, 
    reducers: {
        getToSwitchHomePage: state => {state.isHomePage = false}
    }
})


export const {getToSwitchHomePage} = TrueLearnLogo.actions; 
export default TrueLearnLogo.reducer; 