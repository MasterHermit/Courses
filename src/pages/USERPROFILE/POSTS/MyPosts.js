import React from 'react';
import Sidebar  from '../components/Sidebar';

export default function MyPosts() {
  return (
    <div className="flex flex-col h-auto md:flex-row">
      <Sidebar/>

      <span className='w-full'>

        <div className='flex flex-col items-center'>
            Posts
        </div>

      </span>

    </div>
  )
}
