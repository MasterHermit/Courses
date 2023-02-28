import React from "react";
import SearchBar from "../searchBar/SearchBar";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center w-full h-48 md:h-72 bg-slate-700 ">
      <SearchBar />
    </div>
  );
};

export default Hero;
