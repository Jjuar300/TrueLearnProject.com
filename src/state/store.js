import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import Slice from './CancelButtonSlice'
import PromoSlice from './PromoSlice'
import  SearchBar  from './SearchbarSlice'
import ServerSlice from './ServerSlice'
import VideoUrl from './createcourse/VideoUrl'
import DummyCourses from './DummyCourses'
import InputResults from './InputResults'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import Authentication from './AuthenticationSlice'
import userData from './createcourse/userData'
import CourseData from './courseInfo/CourseData'
import UserMenu from './MyCourses/UserMenu'
import UserFile from './components/UserFile'

import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key:'root', 
    version: 1, 
    storage,
    whitelist: ['UserMenu', 'UserFile'],
    blacklist: ['CourseData'], 
}

const reducer = combineReducers({
    UserMenu: UserMenu, 
    handleDrawer: Slice,
    Promo: PromoSlice,
    SearchBar: SearchBar,
    ServerSlice: ServerSlice,
    videoUrl: VideoUrl,
    DummyCourse: DummyCourses, 
    ImportValue: InputResults, 
    Authenticate: Authentication, 
    userData: userData, 
    CourseData: CourseData, 
    UserFile: UserFile, 
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