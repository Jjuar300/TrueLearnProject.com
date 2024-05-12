import SignInPage from "./pages/Authentication/SignIn";
import HomePage from "./pages/Homepage";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Createcourse from './pages/Createcourse'
import UserProfile from "./pages/UserProfile";
import LearningPage from "./pages/LearningPage.jsx/index.jsx";
import Mycourses from "./pages/Mycourses";
import axios from 'axios'
import SignUpPage from './pages/Authentication/SignUp' 
import NotFound from "./pages/Homepage/NotFound";
import PrivateRoutes from "./utils/AuthRoutes";
import UserRoutes from "./utils/UserRoutes";
import ExploreCourse from './pages/ExploreCourse';
import Course from './components/Course/index';
import BuyCourse from "./components/Course/BuyCourse";
import CourseCard from "./components/Course/CourseCard";
import DummyBuyCourse from './pages/ExploreCourse/DummyBuyCourse'
import SearchResult from "./components/SearchResult";
import AccessCourse from './pages/AccessCourse'
import { 
  ClerkProvider, 
  SignedIn, 
  SignedOut,
  SignIn, 
} from '@clerk/clerk-react'

<<<<<<< HEAD
axios.defaults.baseURL = process.env.AXIOS_API_URL || 'http://localhost:3000'; // passing the home url and add the next credentials all around our components
// axios.defaults.baseURL = 'https://truelearn-api.onrender.com';
=======
<<<<<<< HEAD
// axios.defaults.baseURL = 'https://truelearn-api.onrender.com'; // passing the home url and add the next credentials all around our components
axios.defaults.baseURL = 'https://truelearn-api.vercel.app'
=======
axios.defaults.baseURL = process.env.AXIOS_API_URL || 'http://localhost:3000'; // passing the home url and add the next credentials all around our components
// axios.defaults.baseURL = 'https://truelearn-api.onrender.com';
>>>>>>> dev
>>>>>>> main

axios.defaults.withCredentials = true; 

function App() {
return (

 <div className="app" >
    <BrowserRouter>
    <Routes>
   
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/coursecard" element={<CourseCard/>} />
     

      
      <Route path="/createcourse" element={ <Createcourse/>} /> 
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/mylearnings" element={<LearningPage/>} />
      <Route path="/mycourses" element={<Mycourses/>}/>
      <Route path="course" element={<Course/>} />
      <Route path="/accesslecture" element={<AccessCourse/>} />

   <Route path="/explorecourse" element={<ExploreCourse/>} /> 
   <Route path="*" element={<NotFound/>} />
   <Route path="/" element={<HomePage/>} />
   <Route path="/buycourse" element={<BuyCourse/>} />
   <Route path="/dummybuycourse" element={<DummyBuyCourse/>} />
   <Route path="/searchresult" element={<SearchResult/>} />
    
    </Routes>

    </BrowserRouter>
   </div>

  );
}

export default App;
