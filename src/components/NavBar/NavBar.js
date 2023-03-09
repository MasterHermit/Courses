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
    <div className="flex bg-[#9dcee2] justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-[#65010c] font-bold text-lg borderYtoX ">
      <h1 className="w-full text-3xl font-bold text-black">PrepLabs</h1>
      <ul className="hidden md:flex">
        <Link to="/" className="self-center">
          <button
            data-popover-target="popover-Home"
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110"
          >
            <AiOutlineHome />
          </button>
          <div
            data-popover
            id="popover-Home"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-30 h-8 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Home
              </h3>
            </div>
            <div data-popper-arrow></div>
          </div>
        </Link>

        <Link to="/courses" className="self-center ml-2">
        <button
            data-popover-target="popover-Courses"
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110"
          >
            <MdOutlineBookOnline />
          </button>
          <div
            data-popover
            id="popover-Courses"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-30 h-8 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Course
              </h3>
            </div>
            <div data-popper-arrow></div>
          </div>
        </Link>

        <Link to="jobs" className="self-center ml-2">
        <button
            data-popover-target="popover-Jobs"
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110"
          >
            <RiSuitcaseLine />
          </button>
          <div
            data-popover
            id="popover-Jobs"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-30 h-8 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Jobs
              </h3>
            </div>
            <div data-popper-arrow></div>
          </div>
        </Link>
        <Link to="/quiz" className="self-center ml-2">
        <button
            data-popover-target="popover-Quiz"
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110"
          >
            <VscFileCode />
          </button>
          <div
            data-popover
            id="popover-Quiz"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-30 h-8 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Quiz
              </h3>
            </div>
            <div data-popper-arrow></div>
          </div>       
        </Link>
        <Link to="/interest" className="self-center ml-2">
        <button
            data-popover-target="popover-Interest"
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110"
          >
            <TfiNotepad />
          </button>
          <div
            data-popover
            id="popover-Interest"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-30 h-8 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Interest
              </h3>
            </div>
            <div data-popper-arrow></div>
          </div>
        </Link>
        <Link to="/user" className=" self-center ml-2">
        <button
            data-popover-target="popover-User"
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110"
          >
            <BiUserCircle />
          </button>
          <div
            data-popover
            id="popover-User"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-30 h-8 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Jobs
              </h3>
            </div>
            <div data-popper-arrow></div>
          </div>
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
