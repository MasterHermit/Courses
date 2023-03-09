import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCourseQuery } from '../../../../store';
import Error from "../../../Error/Error"
import Footer from "../../../../components/Footer/Footer"

const CourseDetails = () => {
    const { id } = useParams();
    console.log(id);
    // const { data, error, isLoading } = useFetchCourseQuery(id);
    // let content;
    // if (isLoading) {
    //     content = <div>Loading....</div>
    // } else if (error) {
    //     content = <Error />
    // } else {
    //     content = data
    // }

    // const { course_id,
    //     title,
    //     language,
    //     updated_date,
    //     course_type,
    //     course_uses,
    //     time_duration_,
    //     no_of_lectures,
    //     description } = content


    const [showMore, setShowMore] = useState(false);
    const info = "When I read something on websites and saw a show more/less button, I thought it was a good feature because it makes everything on the website look more clean. So I would like to share an easy way to insert a show more/less button by using React- State Hook."
    return (
        <div className='flex flex-col  h-auto  '>
            <div className='  ml-2 md:ml-6'>
                <p className='font-bold text-3xl'>
                    Javascript in your finger tips : touch me
                </p>
                <p className='m-1 text-gray-400 text-justify'>
                    Go from complete novice to expert in Javascript using step
                    -by-step, no-assumptions learning.
                </p>
                <div className='my-4 py-2 text-white'>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                        <CiApple/>
                        </span>
                        <p className='ml-2'>PrepLabs</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                        <RiEnglishInput/>
                        </span>
                        <p className='ml-2'>language - English</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                        <AiOutlineCalendar/>
                        </span>
                        <p className='ml-2'>Updated on feb,2023</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                        <DiJavascript1/>
                        </span>
                        <p className='ml-2'>Development, Javascript</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                        <BsCalendar2Date/>
                        </span>
                        <p className='ml-2'>Uses in ---- --- ------</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                        <BsHourglassTop/>
                        </span>
                        <p className='ml-2'>40+ hours</p>
                    </span>
                    <span className='flex ml-1'>
                        <span className='text-xl'>
                        <BsBook/>
                        </span>
                        <p className='ml-2'>10 lectures</p>
                    </span>
                </div>
            </div>
            <div className=' ml-2 md:ml-6'>
                <p className='overflow-clip leading-relaxed'>
                    {showMore ? info : `${info.substring(0, 20)}... `}
                    <button
                        className='underline'
                        onClick={() => setShowMore(prevVal => !prevVal)}>
                        {showMore ? "show less" : " show more"}
                    </button>
                </p>
                <div className="mt-6">Course Details klkdkjljklf</div>
            </div>
            <div className='m-2 md:m-6'>
                <div className='h-auto  '>
                    <p className='text-2xl font-bold mb-6'>Course Content</p>
                    <CurriculumCard />
                </div>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetails;