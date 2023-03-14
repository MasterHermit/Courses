import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/COURSE/Home";
import Courses from "./pages/COURSE/Coursess/Courses";
import CourseDetails from "./pages/COURSE/Coursess/courseDetails/CourseDetails";
import Jobs from "./pages/COURSE/Jobs/Jobs";
import Quizes from "./pages/COURSE/Quizes/Quizes";
import Interests from "./pages/COURSE/Interests/Interests";
import UserProfile from "./pages/USER/UserProfile";
import CreatePost from "./pages/SOCIAL/CreatePost/CreatePost";
import Error from "./pages/Error/Error";
import Signup from "./pages/USER/Signup/Signup";
import Login from "./pages/USER/Login/Login";
import ForgetPassword from "./pages/USER/ForgetPassword/ForgetPassword";
import OTP from "./pages/USER/OTP/OTP";
import ResetPassword from "./pages/USER/ResetPassword/ResetPassword";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetPassword' element={<ForgetPassword/>} />
          <Route path='/ResetPassword' element={<ResetPassword/>} />
          <Route path='/otp' element={<OTP/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/quiz" element={<Quizes />} />
          <Route path="/interest" element={<Interests />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
