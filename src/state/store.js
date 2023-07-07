import {configureStore} from '@reduxjs/toolkit'
import Slice from './CancelButtonSlice'
import PromoSlice from './PromoSlice'
import  SearchBarDrawer  from './SearchbarSlice'
import AuthenticationSlice from './AuthenticationSlice'
import TrueLearnLogoSlice from './TrueLearnLogoSlice'
import AddSectionSlice from './AddSectionSlice'

export default configureStore({
reducer: {
    handleDrawer: Slice,
    Promo: PromoSlice,
    SearchBarDrawer: SearchBarDrawer,
    Authenticate: AuthenticationSlice,
    TrueLearnLogoSlice: TrueLearnLogoSlice,
    AddSection: AddSectionSlice,     
},     

})