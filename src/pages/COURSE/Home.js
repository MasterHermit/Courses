import React from "react";
//import Hero from "../../components/Hero/Hero";
import Posts from "../SOCIAL/Posts/Posts"


const Home = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-400 ">
      <div className="bg-red-400 h-64">
        Carousel
      </div>
      <div className="mt-6 bg-red-200">
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
