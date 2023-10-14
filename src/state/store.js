import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import Slice from './CancelButtonSlice'
import PromoSlice from './PromoSlice'
import  SearchBar  from './SearchbarSlice'
import AuthenticationSlice from './AuthenticationSlice'
import TrueLearnLogoSlice from './TrueLearnLogoSlice'
import AddSectionSlice from './createcourse/AddSectionSlice'
import indexSlice from './createcourse/indexSlice'
import ServerSlice from './ServerSlice'
import InputSlice from './createcourse/InputSlice'
import upload from './createcourse/upload'
import VideoUrl from './createcourse/VideoUrl'
import DummyCourses from './DummyCourses'

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
    SearchBar: SearchBar,
    Authenticate: AuthenticationSlice,
    TrueLearnLogoSlice: TrueLearnLogoSlice,
    AddSection: AddSectionSlice,
    CreatingCourse: indexSlice, 
    ServerSlice: ServerSlice,
    Input: InputSlice, 
    upload: upload, 
    videoUrl: VideoUrl,
    DummyCourse: DummyCourses,        
},  
middleware:(getDefaultMiddleware) => {
 return  getDefaultMiddleware({
        serializableCheck: false, 
    })
}   

})