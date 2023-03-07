import React from "react";
import Posts from "../SOCIAL/Posts/Posts"
import Carousal from "../../components/Carousal/Carousal";


const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col md:flex-row md:justify-content  ">
      <div className="w-[20rem] h-[15rem] mt-6 mx-6 bg-yellow-100">
         
      </div>
      <div className=" mx-2 ">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
