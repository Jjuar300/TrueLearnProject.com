import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import Slice from './CancelButtonSlice'
import PromoSlice from './PromoSlice'
import  SearchBarDrawer  from './SearchbarSlice'
import AuthenticationSlice from './AuthenticationSlice'
import TrueLearnLogoSlice from './TrueLearnLogoSlice'
import AddSectionSlice from './createcourse/AddSectionSlice'
import indexSlice from './createcourse/indexSlice'
import ServerSlice from './ServerSlice'
import InputSlice from './createcourse/InputSlice'

import {
    FLUSH,
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER
} from 'redux-persist'

export default configureStore({
reducer: {
    handleDrawer: Slice,
    Promo: PromoSlice,
    SearchBarDrawer: SearchBarDrawer,
    Authenticate: AuthenticationSlice,
    TrueLearnLogoSlice: TrueLearnLogoSlice,
    AddSection: AddSectionSlice,
    CreatingCourse: indexSlice, 
    ServerSlice: ServerSlice,
    Input: InputSlice,        
},  
middleware:(getDefaultMiddleware) => {
 return  getDefaultMiddleware({
        serializableCheck: false, 
    })
}   

})