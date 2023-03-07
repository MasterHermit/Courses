
import React from 'react';
import CarousalCard from './CarousalCard';

const Carousal = () => {
    return (

        <div id="default-carousel" className="relative" data-carousel="slide">

            <div className="relative  overflow-hidden h-[17rem] rounded-lg ">

                <div className="hidden duration-700 ease-in-out  " data-carousel-item>
                    <a href="https://www.freepik.com/free-vector/autumn-background_16713475.htm#from_view=detail_author" >
                        <img src="https://img.freepik.com/free-vector/autumn-background_23-2149054409.jpg?t=st=1678156088~exp=1678156688~hmac=db32e6a9ce8e73450133f223f6cc36ce1ebf732b9f524a708bd051474acf9356" alt="caarousal" />
                    </a>
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <a href="https://unsplash.com/" >
                        <img src="https://images.unsplash.com/photo-1678106741653-455a43825002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="caraousal2" />
                    </a>
                </div>


            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full bg-zinc-400" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-zinc-400" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-zinc-400" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-zinc-400" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-zinc-400" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    );
};

export default Carousal;

