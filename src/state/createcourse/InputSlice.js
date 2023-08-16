import { createSlice, isAction } from "@reduxjs/toolkit";

const InputSlice = createSlice({
    name:'inputValues', 
    initialState:{
        SectionInputValues:'', 
        UploadVideoFormState: null, 
        IntroductionInputValue: '', 
    }, 
    reducers:{
        updateSectionInputValue: (state, action) =>{
            state.SectionInputValues = action.payload; 
        }, 

        getUploadVideoFormState: (state, action) => {
            state.UploadVideoFormState = action.payload.UploadVideoFormState 
        }, 

        updateIntroductionInputValue: (state, action) => {
            state.IntroductionInputValue = action.payload; 
        }
    }
})

export const {
    updateIntroductionInputValue, 
    updateSectionInputValue, 
    getUploadVideoFormState, 
} = InputSlice.actions; 
export default InputSlice.reducer; 