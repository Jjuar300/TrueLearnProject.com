import SignInPage from "./pages/Authentication/SignIn";
import SignUpPage from "./pages/Authentication/SignUp";
import HomePage from "./pages/Homepage";
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Createcourse from './pages/Createcourse'
import UploadVideo from "./pages/Createcourse/UploadVideo";
import CourseInfo from "./pages/Createcourse/CourseInfo";
import UserProfile from "./pages/UserProfile";
import ChanelPage from "./pages/LearningPage.jsx/index.jsx";
import Mycourses from "./pages/Mycourses";

function App() {

return (
  <>
   <div className="app" >
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<HomePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="signup" element={<SignUpPage/>} />
      <Route path="/createcourse" element={ <Createcourse/>} />
      <Route path="/uploadvideo" element={<UploadVideo/>} />
      <Route path="/courseinfo" element={<CourseInfo/>} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/chanels" element={<ChanelPage/>} />
      <Route path="/mycourses" element={<Mycourses/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  </>
  );
}

export default App;
