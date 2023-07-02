import {configureStore} from '@reduxjs/toolkit'
import Slice from './CancelButtonSlice'
import PromoSlice from './PromoSlice'
import  SearchBarDrawer  from './SearchbarSlice'

export default configureStore({
reducer: {
    handleDrawer: Slice,
    Promo: PromoSlice,
    SearchBarDrawer: SearchBarDrawer,  
},     

})