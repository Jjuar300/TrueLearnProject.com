import SignInPage from "./pages/Authentication/SignIn";
import HomePage from "./pages/Homepage";
import {BrowserRouter, Navigate, Routes, Route, Link} from 'react-router-dom'
import Createcourse from './pages/Createcourse'
import UploadVideo from "./pages/Createcourse/UploadVideo";
import CourseInfo from "./pages/Createcourse/CourseInfo";
import UserProfile from "./pages/UserProfile";
import LearningPage from "./pages/LearningPage.jsx/index.jsx";
import Mycourses from "./pages/Mycourses";

function App() {

return (
  <>
   <div className="app" >
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<HomePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/createcourse" element={ <Createcourse/>} />
      <Route path="/uploadvideo" element={<UploadVideo/>} />
      <Route path="/courseinfo" element={<CourseInfo/>} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/learning" element={<LearningPage/>} />
      <Route path="/mycourses" element={<Mycourses/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  </>
  );
}

export default App;
