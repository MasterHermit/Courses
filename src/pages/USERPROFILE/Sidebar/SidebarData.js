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
        link:'/users/:userid/certificates'
    },
    {
        title:"POSTS",
        icon:<MdLocalPostOffice/>,
        link:"/users/:userid/posts"
    },
    {
        title:"COURSES",
        icon:<ImBooks/>,
        link:"/users/:userid/mycourses"
    },
    {
        title:"JOBS",
        icon:<MdOutlineWork/>,
        link:"/users/:userid/jobs"    
    },
    {
        title:"EXAMS",
        icon:<MdQuiz/>,
        link:"/users/:userid/exams"
    },
    {
        title:"INTERESTS",
        icon:<GiSelfLove/>,
        link:"/users/:userid/interests"
    },
    {
        title:"EDIT PROFILE",
        icon:<AiFillSetting/>,
        link:"/users/:userid/edit"
    },
    {
        title:"SETTINGS",
        icon:<AiFillSetting/>,
        link:"/users/:userid/settings"
    }
]
