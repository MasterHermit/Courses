

import React, { useState } from 'react';
import Interest from './Interest';


const Interests = () => {
    const [data, setData] = useState(Interest);
    const filterResult = (catItem) => {
        const result = Interest.filter((curData) => {
            return curData.Interests === catItem;
        });
        setData(result);
    }
    return (
        <>
            <h2 class="text-4xl font-extrabold dark:text-white text-center">Interests</h2>

            {/* left sidebar */}
            <div className='flex flex-row w-screen  justify-center items-center'>
                <div id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className='btn btn-warning w-100 mb-4' onClick={() => setData(Interest)}>All</button>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Engineering')}>Engineering</button>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Medical')}>Medical</button>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('Administration')}>Administration</button>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('B.Sc')}>B.Sc</button>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('PCM')}>PCM</button>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult('PCMB')}>PCMB</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* right sidebar */}
                <div className="  flex flex-row flex-wrap justify-center items-center ml-[300px]" >
                    {data.map((values) => {
                        const { id, title, image } = values;
                        return (
                            <>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg " key={id}>
                                    <img className="w-full" src={image} alt="..." />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{title}</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                        <button className="btn btn-dark">Buy Now</button>
                                    </div>

                                </div>
                            </>
                        )
                    })}

                </div >

            </div>


        </>
    )
}

export default Interests
