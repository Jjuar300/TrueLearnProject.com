import { createSlice } from "@reduxjs/toolkit";


export const PromoSlice = createSlice({
name:'Promo', 
initialState:{
    isPromo: true,
}, 

reducers:{
handledPromoClose: (state) => {state.isPromo = false}
}
})


export const {handledPromoClose} = PromoSlice.actions; 
export default PromoSlice.reducer; 