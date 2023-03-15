import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchCourseQuery } from "../../../../store";
import Error from "../../../Error/Error";
import "./CourseDetails.css";
import Accordion from "./Accordion";
import Footer from "../../../../components/Footer/Footer";
// import { CiApple } from "react-icons/ci";
// import { RiEnglishInput } from "react-icons/ri";
// import { AiOutlineCalendar } from "react-icons/ai";
// import { DiJavascript1 } from "react-icons/di";
// import { BsCalendar2Date } from "react-icons/bs";
// import { BsHourglassTop } from "react-icons/bs";
// import { BsBook } from "react-icons/bs";
import {GrCircleAlert} from 'react-icons/gr';
import{TbWorld} from 'react-icons/tb';
import{BiSpreadsheet} from 'react-icons/bi';
import {TiTick} from 'react-icons/ti'
import Feedback from "../Feedback/Feedback";


const CourseDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useFetchCourseQuery(id);
  let content;
  if (isLoading) {
    content = <div>Loading....</div>;
  } else if (error) {
    content = <Error />;
  } else {
    content = data;
  }

  const {
    course_id,
    title,
    language,
    updated_date,
    course_type,
    course_uses,
    time_duration_,
    no_of_lectures,
    ...curriculum
  } = content;

  const items = [
    {
      id: "l2kj5",
      label: "Can I use React on a project?",
      content: [
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
      ],
    },
    {
      id: "l2kj5",
      label: "Can I use React on a project?",
      content: [
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
      ],
    },
    {
      id: "l2kj5",
      label: "Can I use React on a project?",
      content: [
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
        {
          title: "hooks in react",
          time: "13.46",
        },
      ],
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const info =
    "When I read something on websites and saw a show more/less button, I thought it was a good feature because it makes everything on the website look more clean. So I would like to share an easy way to insert a show more/less button by using React- State Hook.";
  return (
    <div className="flex flex-col  h-auto text">  
      <div className="bg-[#1b1b1b] md:h-[20rem] sm: h-auto">
        <div className="md:w-[50rem] md:ml-[30rem] md:space-y-4 sm: m-2 sm: space-y-2">
        <p className="font-bold md:text-3xl text-white md:mt-8 text-justify sm: text-xl sm: mt-2">
          React Testing Library and Jest: The Complete Guide
        </p>
        <p className=" text-zinc-200 font-medium text-justify sm: text-sm">
          A complete,all-in-one guide to fully testing tour React projects using React
          Testing Library and Jest.Go from complete novice to expert in Javascript using step -by-step,
          no-assumptions learning.
        </p>
        <div class="flex justify-start">
            <p class=" text-sm font-medium text-[#fcd34d] dark:text-[#fcd34d] mr-1">
                4.8
            </p>  
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
           <p class="ml-2 text-sm font-medium text-[#818cf8] dark:text-[#818cf8] mr-1">
                (392  rating)
                <span className="text-white ml-2"> 4,351 students</span>
            </p> 
        </div>
        <div className="text-justify">
            <p className="text-white">
                Created by <Link to={'/'} className="text-purple-300 underline ml-1"> Stephen Grider</Link>
            </p>
            <p className="text-white flex text-justify mt-4 sm: mb-2">
                <span className="self-center text-xl mr-2 text-white bg-white rounded-full">
                <GrCircleAlert/>
                </span>
                Last updated 3/2023
            </p>
            <p className="text-white flex text-justify mt-4 sm: mb-2">
                <span className="self-center text-xl mr-2 text-white rounded-full">
                <TbWorld/>
                </span>
                English
            </p>
            <p className="text-white flex text-justify mt-3 sm: mb-2">
                <span className="self-center text-xl mr-2 text-white rounded-full">
                <BiSpreadsheet/>
                </span>
                English [Auto]
            </p>
        </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="md:h-[18rem]  m-4 border-2  shadow-xl md:w-[50rem] md:ml-[30rem] md:space-y-3">
            <p className="font-bold text-2xl md:ml-7 md:mb-4 md:mt-6 sm: ml-4 sm: mb-4">What you'll learn</p>
            <span className="text-4xl md:text-2xl flex justify-center">
            <TiTick/>
            <p className="text-sm ml-2 md:mr-1  sm: mr-3 text-justify">Everythingl you need to know about testing React Components using React Testing Library and Jest</p>
            </span>
            <span className="text-4xl md:text-2xl flex justify-center">
            <TiTick/>
            <p className="text-sm ml-2 md:mr-1 sm: mr-3 text-justify">Everythingl you need to know about testing React Components using React Testing Library and Jest</p>
            </span>
            <span className="text-4xl md:text-2xl flex justify-center">
            <TiTick/>
            <p className="text-sm ml-2 md:mr-1 sm: mr-3 text-justify">Everythingl you need to know about testing React Components using React Testing Library and Jest</p>
            </span>
            <span className="text-4xl md:text-2xl flex justify-center">
            <TiTick/>
            <p className="text-sm ml-2 md:mr-1 sm: mr-3 text-justify">Everythingl you need to know about testing React Components using React Testing Library and Jest</p>
            </span>
            <span className="text-4xl md:text-2xl flex justify-center">
            <TiTick/>
            <p className="text-sm ml-2 md:mr-1 sm: mr-3 text-justify">Everythingl you need to know about testing React Components using React Testing Library and Jest</p>
            </span>
        </div>
      </div>
      <div className=" m-1 md:mt-10 bg-white">
        <div className="md:w-[50rem] md:ml-[30rem] border-2 shadow-xl md:h-[20rem]">
        <p className="font-bold text-2xl bg-zinc-400 md:h-12">
          <span className="ml-2 md:ml-7 ">Course Description</span>
        </p>
        <p className="overflow-clip leading-relaxed m-2 text-justify">
          {showMore ? info : `${info.substring(0, 200)}... `}
          <button
            className="underline bg-blue-700 text-white hover:bg-blue-600 rounded-lg px-2"
            onClick={() => setShowMore((prevVal) => !prevVal)}
          >
            {showMore ? "show less" : " show more"}
          </button>
        </p>
        <div className="mt-5 ml-2 md:mt-[5rem]">Course Details klkdkjljklf</div>
        </div>
      </div>
      <div className="m-2 md:mt-10 bg-white ">
        <div className="h-auto md:w-[50rem] md:ml-[30rem] shadow-xl">
          <p className="text-2xl font-bold mb-6 ml-1 md:ml-0 md:mb-3 bg-slate-200">Course Content</p>
          <Accordion items={items} />
        </div>
        <div></div>
      </div>
      <div className="sm:m-2">
        <p className="text-2xl font-bold mb-6 md:ml-[30rem]">Feedback</p>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
