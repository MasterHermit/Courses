import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/COURSE/Home";
import Courses from "./pages/COURSE/Coursess/Courses";
import Jobs from "./pages/COURSE/Jobs/Jobs";
import Quizes from "./pages/COURSE/Quizes/Quizes";
import Interests from "./pages/COURSE/Interests/Interests";


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/quiz" element={<Quizes />} />
          <Route path="/Interest" element={<Interests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
