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

// user profile
import Certificates from './pages/USERPROFILE/Certificates/Certificates';
import MyExams from './pages/USERPROFILE/Exams/MyExams';
import MyInterests from './pages/USERPROFILE/Interests/MyInterests';
import MyPosts from "./pages/USERPROFILE/POSTS/MyPosts";
import MyJobs from "./pages/USERPROFILE/Jobs/MyJobs";
import MyProfile from "./pages/USERPROFILE/Profile/MyProfile";
import MyCourses from "./pages/USERPROFILE/Mycourses/MyCourses";
import InprogressCourses from "./pages/USERPROFILE/Mycourses/InprogressCourses";
import CompletedCourses from "./pages/USERPROFILE/Mycourses/CompletedCourses";
import AddProfile from "./pages/USERPROFILE/Edit Profile/AddProfile";
import  Settings  from "./pages/USERPROFILE/Settings/";

function App() {
  return (
    <div className="scroll-smooth">
      <Router>
        <NavBar />
        <Routes>

          {/* Auth routes */}
          <Route exact path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetPassword' element={<ForgetPassword/>} />
          <Route path='/resetPassword' element={<ResetPassword/>} />
          <Route path='/otp' element={<OTP/>} />

          {/* user profile routes */}
          <Route path="/users/:userid/myprofile" element={<MyProfile/>}/>
          <Route path="/users/:userid/certificates" element={<Certificates/>}/>
          <Route path="/users/:userid/edit" element={<AddProfile/>}/>
          <Route path="/users/:userid/mycourses" element={<MyCourses/>} />
          <Route path="/users/:userid/mycourses/inprogress" element={<InprogressCourses/>} />
          <Route path="/users/:userid/mycourses/completed" element={<CompletedCourses/>} />
          <Route path='/users/:userid/posts' element={<MyPosts/>} />
          <Route path="/users/:userid/exams" element={<MyExams />} />
          <Route path="/users/:userid/interests" element={<MyInterests />} />
          <Route path="/users/:userid/jobs" element={<MyJobs />} />
          <Route path="/users/:userid/settings" element={<Settings />} />

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
