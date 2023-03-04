import React from 'react'
import { Link } from "react-router-dom"

import { GiDuration } from "react-icons/gi"
import { BiBookReader } from "react-icons/bi"
import { FaStar } from "react-icons/fa"

const Card = ({ course }) => {

  return (
    <div className='h-full flex p-2 '>

      <div className='flex bg-zinc-500 flex-col h-[400px] w-[400px] max-w-xs rounded overflow-hidden mb-3 shadow-lg'>
        <Link to="/course_details">
          <div className='h-[200px] w-auto'>
            <img src={course.thumbnail} alt={course.title} />
          </div>
        </Link>
        <div className='flex flex-col h-auto w-auto bg-zinc-50'>
          <Link to="/course_details">
            <div
              className=' h-[100px] flex items-center mt-4 text-xl font-bold hover:text-sky-400'>{course.title}</div>
          </Link>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 "></hr>
          <div className='flex flex-row justify-between'>
            <div className='flex ml-[10px] pb-1 text-sky-400/100'>
              <span className='pt-1 pr-1'>
                <GiDuration />
              </span>
              duration
            </div>
            <div className='flex mr-[10px] text-sky-400/100' >
              <span className='pt-1 pr-1'>
                <BiBookReader />
              </span>
              no of lecture
            </div>
          </div>
          <div className='text-gray-500 ml-2 font-bold text-base mb-1'>{course.instructor_name}</div>
          <div className="h-auto ml-2 flex flex-row items-center pb-2">

            <span className="mr-1">{course.ratings}</span>
            <FaStar />

          </div>
        </div>
      </div>
    </div>


  );
};

export default Card;