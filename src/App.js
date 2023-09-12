import SignInPage from "./pages/Authentication/SignIn";
import HomePage from "./pages/Homepage";
import {BrowserRouter, Navigate, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Createcourse from './pages/Createcourse'
import UserProfile from "./pages/UserProfile";
import LearningPage from "./pages/LearningPage.jsx/index.jsx";
import Mycourses from "./pages/Mycourses";
import axios from 'axios'
import SignUpPage from './pages/Authentication/SignUp' 
import { UserContextProvider } from "./context/userContext";
import { useSelector } from "react-redux";
import NotFound from "./pages/Homepage/NotFound";
import PrivateRoutes from "./utils/AuthRoutes";
import UserRoutes from "./utils/UserRoutes";
import ExploreCourse from './pages/ExploreCourse'

axios.defaults.baseURL = 'http://localhost:3002'; // passing the home url and add the next credentials all around our components

axios.defaults.withCredentials = true; 


function App() {
const userData = Boolean(useSelector(state => state.ServerSlice.data))
console.log(userData)
return (

 <UserContextProvider>
 <div className="app" >
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoutes/>}>

      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />

      </Route>

      <Route element={<UserRoutes/>}>

      <Route path="/createcourse" element={ <Createcourse/>} /> 
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/mylearnings" element={<LearningPage/>} />
      <Route path="/mycourses" element={<Mycourses/>}/>

      </Route>

     
   <Route path="/explorecourse" element={<ExploreCourse/>} /> 
   <Route path="*" element={<NotFound/>} />
   <Route path="/" element={<HomePage/>} />
    
    </Routes>
    </BrowserRouter>
   </div>
</UserContextProvider>

  );
}

export default App;
