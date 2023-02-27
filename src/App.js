import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/COURSE/Hero";
import Hero from "./pages/COURSE/Hero";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
