import React from 'react';


export default function MyCourseCard({ course }) {
  console.log(course);

  return (

    <div className="rounded overflow-hidden shadow-lg flex flex-col md:flex-row my-6 md:w-3/5 md:h-[300px]">
      
      <div className='px-12 md:px-0 md:w-[500px]'>
        <img className="w-full h-full" src={ course.image }  alt="course photo" />
      </div>

        <div className="text-center">
          <div className="font-bold text-xl mb-2"> { course.course_title } </div>
          <p className="md:px-5 text-gray-700 text-base">
            { course.course_desc }
          </p>
        </div>
    </div>
  )
}
