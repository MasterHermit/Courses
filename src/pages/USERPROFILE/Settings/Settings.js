import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default function Settings() {
  return (
    <div className="flex flex-col h-auto md:flex-row">
      <Sidebar/>

      <span className='w-full'>

        <div className='flex flex-col items-center'>
            Settings
        </div>

      </span>

    </div>
  )
}
