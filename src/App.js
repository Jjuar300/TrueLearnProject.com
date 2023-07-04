import SignInPage from "./pages/Authentication/SignIn";
import SignUpPage from "./pages/Authentication/SignUp";
import HomePage from "./pages/Homepage";
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Createcourse from './pages/Createcourse'

function App() {

  return (
  <>
   <div className="app" >
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<HomePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="signup" element={<SignUpPage/>} />
      <Route path="/CreateCourse" element={<Createcourse/>} />
    </Routes>
    </BrowserRouter>
   </div>
  </>
  );
}

export default App;
