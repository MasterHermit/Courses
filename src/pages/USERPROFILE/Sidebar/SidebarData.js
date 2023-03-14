import React from 'react';
import { AiFillSetting } from "react-icons/ai";
import { MdLocalPostOffice, MdOutlineWork, MdQuiz } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi";

export const SidebarData = [
    { 
        title:"CERTIFICATES",
        icon:<HiOutlineNewspaper/>,
        link:'/certificates'
    },
    {
        title:"POSTS",
        icon:<MdLocalPostOffice/>,
        link:"/posts"
    },
    {
        title:"COURSES",
        icon:<ImBooks/>,
        link:"/mycourses"
    },
    {
        title:"JOBS",
        icon:<MdOutlineWork/>,
        link:"/jobs"    
    },
    {
        title:"EXAMS",
        icon:<MdQuiz/>,
        link:"/exams"
    },
    {
        title:"INTERESTS",
        icon:<GiSelfLove/>,
        link:"/interests"
    },
    {
        title:"EDIT PROFILE",
        icon:<AiFillSetting/>,
        link:"/edit"
    },
    {
        title:"SETTINGS",
        icon:<AiFillSetting/>,
        link:"/settings"
    }
]
