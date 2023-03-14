import React from "react";
import Posts from "../SOCIAL/Posts/Posts"
import Carousal from "../../components/Carousal/Carousal";
import "./Home.css"

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col md:flex-row md:justify-content">
      <div className="w-[20rem] h-[20rem] mt-6 mx-6 z-0 ">
        <Carousal />
      </div>
      <div className=" mx-2 ">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
