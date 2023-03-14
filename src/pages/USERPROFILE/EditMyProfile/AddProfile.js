import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EditProfile from './EditProfile';
import Educationdetails from './Educationdetails';
import Certifications from './Certifications';
import Address from './Address';
import Experiencedetails from './Experiencedetails';

export default function AddProfile() {
  return (
    <div className="flex flex-col h-auto md:flex-row">
      <Sidebar/>

      <span className='w-full'>

        <div className='flex flex-col'>
            <EditProfile/>
            <Educationdetails/>
            <Certifications/>
            <Address/>
            <Experiencedetails/>
        </div>

      </span>

    </div>
  )
}