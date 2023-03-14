import React from 'react';
import { GiCancel } from 'react-icons/gi';

export default function EducationModal( { isVisible, onClose } ) {

    if( !isVisible ) return null;


  return (
    <div className='fixed inset-0 bg-black 
    bg-opacity-25 backdrop-blur-sm md:flex 
    md:justify-center md:items-center'>
        <div className='bg-white mt-2 ml-2 w-[350px] md:w-[600px] flex flex-col border-4'>
            <button className='text-black mb-3 text-xl place-self-end'
            onClick={ ()=>onClose() } >
                <GiCancel/>
            </button>
            <div className='p-2 rounded mb-2'>
                <form>

                    <div className=''>
                        <textarea placeholder='Enter the education' 
                        className="border-4 rounded border-stone-900 bg-sky-400 p-1"
                        ></textarea>

                        <button 
                        className='ml-2 bg-red-500 border-4 
                        border-stone-900 rounded p-1'
                        >Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
  )
}

