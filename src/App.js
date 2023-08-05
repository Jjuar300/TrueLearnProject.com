import SignInPage from "./pages/Authentication/SignIn";
import HomePage from "./pages/Homepage";
import {BrowserRouter, Navigate, Routes, Route, Link} from 'react-router-dom'
import Createcourse from './pages/Createcourse'
import UploadVideo from "./pages/Createcourse/UploadVideo";
import CourseInfo from "./pages/Createcourse/CourseInfo";
import UserProfile from "./pages/UserProfile";
import LearningPage from "./pages/LearningPage.jsx/index.jsx";
import Mycourses from "./pages/Mycourses";
import axios from 'axios'
import { useContext, useState } from "react";
import SignUpPage from './pages/Authentication/SignUp' 
import { UserContext, UserContextProvider } from "./context/userContext";

axios.defaults.baseURL = 'http://localhost:3002'; // passing the home url and add the next credentials all around our components

axios.defaults.withCredentials = true; 

function App() {

return (

 <UserContextProvider>
 <div className="app" >
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<HomePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/createcourse" element={ <Createcourse/>} />
      <Route path="/uploadvideo" element={<UploadVideo/>} />
      <Route path="/courseinfo" element={<CourseInfo/>} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/mylearnings" element={<LearningPage/>} />
      <Route path="/mycourses" element={<Mycourses/>}/>
    </Routes>
    </BrowserRouter>
   </div>
</UserContextProvider>

  );
}

export default App;
