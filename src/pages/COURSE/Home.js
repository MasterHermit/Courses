import React from "react";
import Hero from "../../components/Hero/Hero";
import Courses from "./Coursess/Courses";
import Card from "../../../src/components/Cards/Card"

//css import
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <Hero />
      </div>
      <div className="courses">
        <Card />
      </div>
    </div>
  );
};

export default Home;
