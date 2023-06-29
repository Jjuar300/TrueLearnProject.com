import {configureStore} from '@reduxjs/toolkit'
import Slice from './CancelButtonSlice'
import PromoSlice from './PromoSlice'

export default configureStore({
reducer: {
    handleDrawer: Slice,
    Promo: PromoSlice, 
},     

})