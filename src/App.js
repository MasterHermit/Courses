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


function App() {
  return (
    <div className="scroll-smooth">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route exact path="/" element={<Home />} />
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
