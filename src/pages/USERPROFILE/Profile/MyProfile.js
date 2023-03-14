import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Profile from './ProfileProfile';
import { useFetchUserProfileQuery } from '../store/apis/userApi';

export default function MyProfile() {

  const  { data,error,isLoading } = useFetchUserProfileQuery();
  let content;

  if(isLoading){
    content = <div>Loading...</div>
  }
  else if(error){
    content = <div>error...</div>
  }
  else{
    content = data.map( (userprofile) => {
      console.log(userprofile);
      return <Profile userprofile={userprofile}/>
    } )
  }


  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar/>
      <span className='w-full'>
        { content }
      </span>
    </div>
  )
}
