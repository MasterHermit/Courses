import React from 'react';
import { useFetchJobsQuery } from '../store';
import Sidebar  from '../Sidebar/Sidebar';

export default function MyJobs() {

  const {data,error,isLoading} = useFetchJobsQuery();
  let content;
  if(isLoading){
    content = <div>Loading...</div>
  }
  else if(error){
    content = <div>error...</div>
  }
  else{
    content=data;
    console.log(content)
  }

  return (
    <div className="flex flex-col h-auto md:flex-row">
      <Sidebar/>

      <span className='w-full'>

        <div className='flex flex-col items-center'>
            Jobs
        </div>

      </span>

    </div>
  )
}
