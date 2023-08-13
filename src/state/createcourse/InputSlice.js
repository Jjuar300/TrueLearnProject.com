import { createSlice, isAction } from "@reduxjs/toolkit";

const InputSlice = createSlice({
    name:'inputValues', 
    initialState:{
        inputValue:'', 
    }, 
    reducers:{
        updateInputValue: (state, action) =>{
            state.inputValue = action.payload; 
        }
    }
})

export const {updateInputValue} = InputSlice.actions; 
export default InputSlice.reducer; 