import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex bg-[#9dcee2] justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-[#65010c] font-bold text-lg">
      <h1 className="w-full text-3xl font-bold text-black ">PrepLabs.</h1>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4">Home</li>
        </Link>
        <Link to="/course">
          <li className="p-4">Courses</li>
        </Link>
        <Link to="jobs">
          <li className="p-4"> Jobs</li>
        </Link>
        <Link to="/quiz">
          <li className="p-4">Quiz</li>
        </Link>
        <Link to="/interest">
          <li className="p-4">Interests</li>
        </Link>
        <Link to="/user">
          <li className="p-4">User</li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#bfdbf7] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <Link to="/">
          <li className="p-4 border-b border-gray-600">Home</li>
        </Link>
        <Link to="/course">
          <li className="p-4 border-b border-gray-600">Courses</li>
        </Link>
        <Link to="jobs">
          <li className="p-4 border-b border-gray-600"> Jobs</li>
        </Link>
        <Link to="/quiz">
          <li className="p-4 border-b border-gray-600">Quiz</li>
        </Link>
        <Link to="/interest ">
          <li className="p-4 border-b border-gray-600">Interests</li>
        </Link>
        <Link to="/user">
          <li className="p-4 border-b border-gray-600">User</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
