import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineBookOnline } from "react-icons/md";
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

    <div className="flex  justify-between items-center h-24 max-w-screen mx-auto px-4 text-zinc-300 font-bold text-lg navbar border-b border-black bg-[#fff]">
      <h1 className="w-auto text-3xl font-bold text-black">Codebeat</h1>
        <ul className='borderYtoX  cursor-pointer hidden md:flex text-black md:mr-[4rem] space-x-4 text-xl'>
          <Link to='/'>
            <li className='p-4 hover:text-[#a2d2ff] hover:dark:text-blue-600 hover:scale-110'>Home</li>
          </Link>
          <Link to='/courses'>
            <li className='p-4 hover:dark:text-blue-600 hover:scale-110'>Course</li>
          </Link>
          <Link to='/quiz'>
            <li className='p-4 hover:dark:text-blue-600 hover:scale-110'>Quiz</li>
          </Link>
          <Link to='/interest'>
            <li className='p-4 hover:dark:text-blue-600 hover:scale-110'>Interest</li>
          </Link>   
          <Link to='/jobs'>
            <li className='p-4 hover:dark:text-blue-600 hover:scale-110'>Job</li>
          </Link>
          <Link to='/user'>
            <li className='p-4 hover:dark:text-blue-600 hover:scale-110'>User</li>
          </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden bg-cyan-900 rounded-full p-2">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#126171] transition duration-500 ease-in-out z-40"
            : "ease-linear duration-500 text-gray-100 fixed left-[-100%]"
        }
      >
        <Link to="/">
          <span className="text-xl flex border-b border-gray-900 shadow-xl">
            <span className="ml-1 self-center">
              <AiOutlineHome />
            </span>
            <li className="p-4 ">Home</li>
          </span>
        </Link>
        <Link to="/courses">
          <span className="text-xl flex border-b border-gray-900 shadow-xl">
            <span className="ml-1 self-center">
              <MdOutlineBookOnline />
            </span>
            <li className="p-4 ">Courses</li>
          </span>
        </Link>
        <Link to="jobs">
          <span className="text-xl flex border-b border-gray-900 shadow-xl">
            <span className="ml-1 self-center">
              <RiSuitcaseLine />
            </span>
            <li className="p-4 "> Jobs</li>
          </span>
        </Link>
        <Link to="/quiz">
          <span className="text-xl flex border-b border-gray-900 shadow-xl">
            <span className="ml-1 self-center">
              <VscFileCode />
            </span>
            <li className="p-4 ">Quiz</li>
          </span>
        </Link>
        <Link to="/interest ">
          <span className="text-xl flex border-b border-gray-900 shadow-xl">
            <span className="ml-1 self-center">
              <TfiNotepad />
            </span>
            <li className="p-4 ">Interests</li>
          </span>
        </Link>
        <Link to="/user">
          <span className="text-xl flex border-b border-gray-900 shadow-xl">
            <span className="m-1 self-center">
              <BiUserCircle />
            </span>
            <li className="p-4 ">User</li>
          </span>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
