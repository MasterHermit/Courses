import React from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

const DisplayFeedback = () => {
    return (
        <div className='h-full flex p-2'>
            <div className=" flex border-2 flex-col h-[350px] w-[350px]  rounded overflow-hidden shadow-lg p-3">
                <div className='flex flex-row items-center'>
                    <img className="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <div className=''>
                        <p className="ml-6 font-medium">Asish Nayak</p>
                        <div class="flex items-center ml-6">
                            <div className="stars flex flex-row">
                                {Array(4).fill(<AiFillStar />)}
                            </div>
                            <p class="ml-2 text-sm font-medium text-zinc-700/100 dark:text-gray-500">a year ago</p>
                        </div>
                    </div>
                </div>
                <div className='mt-2 mb-4 text-sm text-justify'>
                    I just finished watching the section 2 projects. Most of the them
                    appear too be fairly similar to others. While the projects are different
                    or even unique, the javasctipt used in them are nearly the same. On to the next
                    section 3. Anyway, there is definitely a huge difference beween the projects
                    upto section 3 and 2 projects in section 3 up to the mid-way point
                    the first 2 projects in section 3 up to the mid-way point.
                </div>
                <div className='flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600 '>
                    <span className='ml-2'>
                        report
                    </span>
                    <a href="#" class="pl-2 text-sm font-medium text-blue-400 hover:underline dark:text-blue-500">Report abuse</a>
                </div>
            </div>
        </div>
    );
};

export default DisplayFeedback;