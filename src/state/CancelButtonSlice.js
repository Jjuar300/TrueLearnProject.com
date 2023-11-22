import { createSlice } from '@reduxjs/toolkit'; 

export const cancelButtonSlice = createSlice({
    name: 'cancelButton', 
    initialState: {
        open: false, 
    },
    reducers: {
      handleOpen: (state) => {state.open = true}, 
      handleClose: (state) => {state.open = false}
    }

})

export const {handleOpen, handleClose} = cancelButtonSlice.actions; 

export default cancelButtonSlice.reducer; 