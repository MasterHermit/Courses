import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineBookOnline } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi";
import { VscFileCode } from "react-icons/vsc";
import { RiSuitcaseLine } from "react-icons/ri";
import { TfiNotepad } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex bg-[#9dcee2] justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-[#65010c] font-bold text-lg borderYtoX  ">
      <h1 className="w-full text-3xl font-bold text-black">PrepLabs</h1>
      <ul className="hidden md:flex">
        <Link to="/">
          <span className="flex ">
            <span className="place-items-end self-center hover:text-cyan-600 hover:scale-110">
              <AiOutlineHome />
            </span>
            <li className="p-4 hover:text-cyan-600 hover:scale-110 ">Home</li>
          </span>
        </Link>
        <Link to="/courses">
          <span className="flex">
            <span className="self-center hover:text-cyan-600 hover:scale-110">
              <MdOutlineBookOnline />
            </span>
            <li className="p-4  hover:text-cyan-600 hover:scale-110">Courses</li>
          </span>
        </Link>
        <Link to="jobs">
          <span className="flex">
            <span className="self-center hover:text-cyan-600 hover:scale-110">
              <RiSuitcaseLine />
            </span>
            <li className="p-4  hover:text-cyan-600 hover:scale-110"> Jobs</li>
          </span>
        </Link>
        <Link to="/quiz">
          <span className="flex">
            <span className="self-center hover:text-cyan-600 hover:scale-110">
              <VscFileCode />
            </span>
            <li className="p-4  hover:text-cyan-600 hover:scale-110">Quiz</li>
          </span>
        </Link>
        <Link to="/interest">
          <span className="flex">
            <span className="self-center hover:text-cyan-600 hover:scale-110">
              <TfiNotepad />
            </span>
            <li className="p-4  hover:text-cyan-600 hover:scale-110">Interests</li>
          </span>
        </Link>
        <Link to="/user">
          <span className="flex">
            <span className="self-center  hover:text-cyan-600 hover:scale-110">
              <BiUserCircle />
            </span>
            <li className="p-4  hover:text-cyan-600 hover:scale-110">User</li>
          </span>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#bfdbf7] ease-in-out duration-500 z-40"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <Link to="/">
          <li className="p-4 border-b border-gray-600 ">Home</li>
        </Link>
        <Link to="/courses">
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
