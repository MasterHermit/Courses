import React from 'react';
import { MdOutlineSlowMotionVideo } from "react-icons/md"

const CurriculumCard = () => {
    return (
        <div className="w-full md:w-[800px] ">
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>What is Flowbite?</span>
                        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div className="flex flex-row justify-between p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <div className='flex flex-row items-center'>
                            <span className="mb-2 mr-2 text-gray-500 dark:text-gray-400"><MdOutlineSlowMotionVideo /></span>
                            <p className="mb-2 text-gray-500 dark:text-gray-400"> flexbox and how to manipulate it</p>

                        </div>
                        <div >
                            <p className="mb-2 text-gray-500 dark:text-gray-400">13.46</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default CurriculumCard;