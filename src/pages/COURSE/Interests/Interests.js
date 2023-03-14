// import React, { useState } from 'react';
// import Interest from './Interest';

import React from 'react';
import SearchBar from '../../../components/searchBar/SearchBar';

const Interests = () => {
    return (
        <div className='bg-zinc-100 h-screen mt-2'>
            <div>
                <SearchBar/>
            </div>
            <div className=' m-4'>
                <h1 className='font-bold text-4xl'>Choose Your Interests</h1>
                <p className='text-xl'>Pick your Favourite Topics to set up your Skills!!!!</p>
            </div>
            <div className='m-3 flex flex-wrap justify-center gap-4'>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Photography</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Books</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Reading</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Gaming</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Travelling</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Writing</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Philosophy</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Cinematography</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Drawing</button>
                <button className='px-2 rounded-full bg-slate-300 box-content h-10 w-auto hover:scale-110 hover:bg-green-600 focus:ring-4 focus:bg-green-500 focus:outline-none focus:ring-green-300 font-medium text-center dark:hover:bg-green-600 dark:focus:ring-green-800 transition duration-300 ease-in-out'>Cooking</button>

            </div>
            <div className='absolute bottom-3 right-0 left-0 font-sm  text-center'>

                <button className='m-2 bg-purple-400 rounded-full content-center box-content h-10 w-[95vw] md:w-[40vw] md:itmes-center hover:bg-purple-700 focus:ring-4 focus:bg-purple-700 focus:outline-none focus:ring-purple-300 font-medium text-center dark:hover:bg-purple-600 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 hover:scale-110 transition duration-300 ease-in-out'>Continue</button>
            </div>
        </div>
    );
};

export default Interests;
