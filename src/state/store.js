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
import InputResults from './InputResults'
import AccessCourse from './AccessCourse'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key:'root', 
    version: 1, 
    storage, 
}

const reducer = combineReducers({
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
    ImportValue: InputResults, 
    AccessCourse: AccessCourse,  
});

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
reducer: persistedReducer, 
middleware:(getDefaultMiddleware) => {
 return  getDefaultMiddleware({
        serializableCheck: false, 
    })
}   

})