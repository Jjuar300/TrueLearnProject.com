import SignInPage from "./pages/Authentication/SignIn";
import SignUpPage from "./pages/Authentication/SignUp";
import HomePage from "./pages/Homepage";
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Createcourse from './pages/Createcourse'
import UploadVideo from "./pages/Createcourse/UploadVideo";
import CourseInfo from "./pages/Createcourse/CourseInfo";
import { useSelector } from "react-redux";



function App() {
const isuploadVideo = useSelector(state => state.CreatingCourse.uploadVideo)
const isuploadCourseInfo = useSelector(state => state.CreatingCourse.uploadCourseInfo)

  return (
  <>
   <div className="app" >
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<HomePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="signup" element={<SignUpPage/>} />
      <Route path="/createcourse" element={isuploadVideo  ? <Createcourse/> : <UploadVideo/> } />
      <Route path="/createcourse" element={false ? <Createcourse/> : <CourseInfo/>} />
    </Routes>
    </BrowserRouter>
   </div>
  </>
  );
}

export default App;
