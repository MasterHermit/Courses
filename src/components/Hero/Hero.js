import React from "react";
import SearchBar from "../searchBar/SearchBar";
import "./Hero.css"

const Hero = () => {
  return (
    <div className=" flex justify-center items-center w-full h-48 md:h-72 hero__banner">
      <SearchBar />
    </div>
  );
};

export default Hero;
