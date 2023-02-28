import React from "react";
import Hero from "../../components/Hero/Hero";
import Courses from "./Coursess/Courses";

//css import
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <Hero />
      </div>
      <div className="courses">
        <Courses />
      </div>
    </div>
  );
};

export default Home;
