import React from 'react';
import { useFetchMyCoursesQuery } from '../../../store';
import Sidebar  from '../Sidebar/Sidebar';
import MyCourseCard from '../Mycourses/MyCourseCard';

export default function Courses() {
  const{data,error,isLoading}=useFetchMyCoursesQuery();
  let content;
  if(isLoading){
    content=<div>Loading..</div>
  }else if(error){
    content=<div>error...</div>
  }else{
    content=data.map((course)=>{
      console.log(course);
      return <MyCourseCard course={course}/>
    })
    
  }
  return (
    <div className="flex flex-col h-auto md:flex-row">
      <Sidebar/>

      <span className='w-full'>

        <div className='flex flex-col items-center'>
            {content}
        </div>
      </span>

    </div>
  )
}
